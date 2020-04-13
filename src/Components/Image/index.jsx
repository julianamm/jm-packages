import React from 'react';
import PropTypes from 'prop-types';

const Img = props => {

    return (
        <img
            className={`jm-img ${props.className ? props.className : ''}`}
            src={props.src}
            title={props.title}
            alt={props.title}
            width={props.width}
            height={props.height}
        />
    )
}

Img.defaultProps = {
    className: '',
};

export const IconPropTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

Img.propTypes = IconPropTypes;

export default Img;