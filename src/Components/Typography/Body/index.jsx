import React from 'react';
import PropTypes from 'prop-types';
import StyledBody from './styles';

const Body = props => <StyledBody {...props} >{props.label}</StyledBody>

Body.defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    color: 'Blue-Grey-800',
    textCenter: false,
    hover: false,
    cursor: false,
}

Body.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    xs: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    textCenter: PropTypes.bool,
    hover: PropTypes.bool,
    cursor: PropTypes.bool,
}

export default Body;