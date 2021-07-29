import React from "react";
import { withFormik, Form, Field } from "formik";

import * as Yup from "yup";
import FileForm from "./FileForm";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { PITCHDECK } from "./constants";

const NewPitchDeck = ({
  values,
  errors,
  touched,
  setFieldValue,
  setValues,
  isSubmitting,
  setSubmitting,
  setErrors,
  match,
}) => {
  const handleFileChange = (file) => {
    setFieldValue("file", file);
  };

  return (
    <div className="uk-padding-small">
      <div className="uk-grid uk-child-width-expand uk-margin" uk-grid="">
        <div>
          <span className="uk-h3">New Pitch</span>
        </div>
        <div className="uk-width-auto">
          <Link
            to="/"
            className="uk-button uk-button-default uk-button-small uk-text-capitalize uk-text-primary "
          >
            Goto List
          </Link>
        </div>
      </div>
      <Form className="uk-form-stacked">
        <div className={"uk-child-width-1-2@m uk-grid-small"} uk-grid={1}>
          <div>
            <label className="uk-form-label" htmlFor="title">
              Title
            </label>
            <div className="uk-form-controls">
              <Field
                className={[
                  "uk-input",
                  touched.title && errors.title ? " uk-form-danger" : "",
                ].join(" ")}
                id="title"
                name="title"
                type="text"
              />
            </div>
          </div>

          <div>
            <label className="uk-form-label" htmlFor="company">
              Company
            </label>
            <div className="uk-form-controls">
              <Field
                className={[
                  "uk-input",
                  touched.company && errors.company ? " uk-form-danger" : "",
                ].join(" ")}
                id="company"
                name="company"
                type="text"
              />
            </div>
          </div>

          <div className="uk-width-1-1">
            <label className="uk-form-label" htmlFor="description">
              Short Description
            </label>
            <div className="uk-form-controls">
              <Field
                className={[
                  "uk-input",
                  touched.description && errors.description
                    ? " uk-form-danger"
                    : "",
                ].join(" ")}
                id="description"
                name="description"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div
            className={[
              "uk-width-1-1",
              touched.description && errors.description
                ? " tm-border-danger"
                : "",
            ].join(" ")}
          >
            <FileForm handleFileChange={handleFileChange} />
          </div>

          <div className="uk-width-1-1 uk-text-center">
            <button
              type="submit"
              className=" uk-margin-small-top uk-button uk-button-danger uk-width-1-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <i className="fa fa-spinner fa-spin fa-fw"></i>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

const FormikNewAppointment = withFormik({
  mapPropsToValues({ file, title, company, highlight, description }) {
    return {
      file: file || null,
      title: title || "",
      description: description || "",
      company: company || "",
      highlight: highlight || [],
    };
  },
  validationSchema: Yup.object().shape({
    file: Yup.mixed().test("fileSize", "File required.", (value) => {
      if (!value?.name) return false;
      return value?.size >= 10;
    }),
    description: Yup.string().required(),
    company: Yup.string().required(),
    title: Yup.string().required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(PITCHDECK, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        props.history.push(`/${data._id}`);
        setSubmitting(false);
      });
  },
})(NewPitchDeck);

export default withRouter(FormikNewAppointment);
