import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const JMLink = props => {
  return (
    <S.Anchor
        {...props}
        className={`jm-link-component ${props.className ? props.className : ''}`}
        onClick={() => {
            props.onEvent({
            type: "OnClick",
            origin: "JMLink",
            props: {
                data: props.data
            }
            })
        }}
        href={props.to}
        >
        {props.label}
    </S.Anchor>
  )
}


JMLink.defaultProps = {
    className: '',
    xs: false,
    sm: true,
    md: false,
    lg: false,
    reverse: false,
    noUnderscore: false,
}

JMLink.propTypes = {
    onEvent: PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    xs: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    reverse: PropTypes.bool,
    noUnderscore: PropTypes.bool,
    lineThrough: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    visitedColor: PropTypes.string,
    hoverColor: PropTypes.string,
    activeColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    to: PropTypes.string,
}


export default JMLink;
