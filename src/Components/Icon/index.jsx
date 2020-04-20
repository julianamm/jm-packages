import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '../../assets/svg/icons/icon_add.svg/index.js';
import Color from "../Colors";

let size = {
  w: 14,
  h: 14
}

let defaultColor = defaultColor = Color["Blue-Grey-100"]

const JMIcon = props => {
  switch (true) {
    default:
    case props.xs:
      size = {
        w: 14,
        h: 14
      }
      break
    case props.sm:
      size = {
        w: 18,
        h: 18
      }
      break
    case props.md:
      size = {
        w: 24,
        h: 24
      }
      break
    case props.lg:
      size = {
        w: 32,
        h: 32
      }
      break
    case props.xl:
      size = {
        w: 48,
        h: 48
      }
      break
    case props.xxl:
      size = {
        w: 64,
        h: 64
      }
      break
    case props.xxxl:
      size = {
        w: 96,
        h: 96
      }
      break
  }

  switch (true) {
    case props.primary:
      defaultColor = Color["Indigo-500"]
      break
    case props.secondary:
      defaultColor = Color["Pink-200"]
      break
    case props.danger:
      defaultColor = Color["Red-400"]
      break
    case props.warning:
      defaultColor = Color["Yellow-400"]
      break
    case props.info:
      defaultColor = Color["Blue-Grey-100"]
      break
  }

  if (props.color) {
    defaultColor = Color[props.color];
  }

  switch (props.icon) {
    case 'add':
      return <AddIcon fill={defaultColor} width={`${size.w}px`} height={`${size.h}px`} className={`vh-icon ${props.className ? props.className : ''}`} />
    default:
      return <span />
  }
}

JMIcon.defaultProps = {
  className: '',
}
export const IconPropTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
}

JMIcon.propTypes = IconPropTypes

export default JMIcon;
