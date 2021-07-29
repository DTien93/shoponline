import React from 'react';
import PropTypes from 'prop-types';

Helmet.propTypes = {
    title: PropTypes.string.isRequired,

};

function Helmet(props) {
    document.title = '헤이 소녀 shop - ' + props.title;
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Helmet;