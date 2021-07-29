import React from 'react';
import Preloader from '../custom_components/Preloader/Preloader'


const withSpinner = Component => props => {
    const [showSpinner, setShowSpinner] = React.useState(false);

    return (
        <React.Fragment>
            <Component {...props} setShowSpinner={setShowSpinner} />
            {showSpinner && <Preloader />}
        </React.Fragment>);

}

export default withSpinner;