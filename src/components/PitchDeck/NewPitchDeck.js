import React from "react";
import { withFormik, Form, Field } from "formik";

import * as Yup from "yup";
import FileForm from "./FileForm";

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
  return (
    <div className="uk-padding-small">
      <Form className="uk-form-stacked">
        <div className={"uk-child-width-1-2@m uk-grid-small"} uk-grid={1}>
          <div>
            <label className="uk-form-label" htmlFor="title">
              {(touched.title || errors.title) && (
                <span className="uk-text-danger uk-text-small uk-margin-left">
                  {errors.title}
                </span>
              )}
              Title
            </label>
            <div className="uk-form-controls">
              <Field className="uk-input" id="title" name="title" type="text" />
            </div>
          </div>

          <div>
            <label className="uk-form-label" htmlFor="company">
              {(touched.company || errors.company) && (
                <span className="uk-text-danger uk-text-small uk-margin-left">
                  {errors.company}
                </span>
              )}
              Company
            </label>
            <div className="uk-form-controls">
              <Field
                className="uk-input"
                id="company"
                name="company"
                type="text"
              />
            </div>
          </div>

          <div className="uk-width-1-1">
            <label className="uk-form-label" htmlFor="description">
              {(touched.description || errors.description) && (
                <span className="uk-text-danger uk-text-small uk-margin-left">
                  {errors.description}
                </span>
              )}
              Short Description
            </label>
            <div className="uk-form-controls">
              <Field
                className="uk-input"
                id="description"
                name="description"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <FileForm />
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
  mapPropsToValues({ fileUrl, title, company, highlight, description }) {
    return {
      fileUrl: fileUrl || "",
      title: title || "",
      description: description || "",
      company: company || "",
      highlight: highlight || [],
    };
  },
  validationSchema: Yup.object().shape({
    fileUrl: Yup.string().required(),
    description: Yup.string().required(),
    company: Yup.string().required(),
    highlight: Yup.string().required(),
    title: Yup.string().required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {},
})(NewPitchDeck);

export default FormikNewAppointment;
