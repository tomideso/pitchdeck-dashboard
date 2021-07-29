import React,{useEffect,useState} from 'react';
import { withRouter} from 'react-router-dom';
import { compose } from '../constants/utility';
import { withAuthentication } from './withAuthentication';
import withSpinner from './withSpinner';


const withFetch = baseurl => Component => {


    const withFetch = (props) => {

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null);
        const [pathname, setPathname] = useState(null);

        let url = baseurl + pathname;

        let umounted = false;

        useEffect(() => {

            if(pathname == null) return;

            props.setShowSpinner(true)
            props.httpClient.get(url)
                .then(data => {

                    if (!umounted) {
                        setData(data)
                        setLoading(false)
                        setError(null)
                        props.setShowSpinner(false)
                    }
                })
                .catch(error => {
                    props.setShowSpinner(false)
                    setData([])
                    setLoading(false)
                    setError(error)
                })

            return () => {
                umounted = true;
            }

        }, [pathname]);

        return <Component {...props} setPathname={setPathname} data={data} setData={setData} error={error} />

    }
    
    return compose(
        withRouter,
        withSpinner,
        withAuthentication,
    )(withFetch);

};

export default withFetch;