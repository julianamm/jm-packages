import React from 'react';
import PropTypes from 'prop-types';
import JMIcon from '../Icon/index';
import ButtonBasic, { ButtonOutlined, ButtonIconPlan, ButtonIconLabel } from './styles';

const JMButton = props => {

  const [closeModal, setCloseModal] = React.useState(props.closeModal);
  React.useEffect(() => {
    setCloseModal(props.closeModal);
  }, [props.closeModal])

  if (props.outline) {
    return (
      <ButtonOutlined
        {...props}
        disabled={(props.disabled || props.loading)}
        className={`jm-button ${props.className ? props.className : ''}`}
        type="button"
        onClick={() => {
          props.onEvent({
            type: "OnClick",
            origin: "Button",
            props: {
              data: props.data
            }
          })
        }}>
        {
          props.loading && props.loadingLabel ? props.loadingLabel : props.label
        }
      </ButtonOutlined>
    )
  }
  if (props.iconPlan) {
    return (
      <ButtonIconPlan
        {...props}
        disabled={(props.disabled || props.loading)}
        className={`jm-button ${props.className ? props.className : ''}`}
        type="button"
        onClick={() => {
          props.onEvent({
            type: "OnClick",
            origin: "Button",
            props: {
              data: props.data
            }
          })
        }}>
          <JMIcon 
            icon={props.icon} 
            color={props.colorIcon} 
            sm={props.smIcon}
            md={props.mdIcon}
            lg={props.lgIcon}
            xl={props.xlIcon}
          />
      </ButtonIconPlan>
    )
  }
  if (props.iconLabel) {
    return (
      <ButtonIconLabel
        {...props}
        disabled={(props.disabled || props.loading)}
        className={`jm-button ${props.className ? props.className : ''}`}
        type="button"
        onClick={() => {
          props.onEvent({
            type: "OnClick",
            origin: "Button",
            props: {
              data: props.data
            }
          })
        }}>
          <JMIcon 
            icon={props.icon} 
            color={props.colorIcon} 
            sm={props.smIcon}
            md={props.mdIcon}
            lg={props.lgIcon}
            xl={props.xlIcon}
          />
          <span style={{ paddingLeft: "10px" }}>
            {
              props.loading && props.loadingLabel ? props.loadingLabel : props.label
            }
          </span>
      </ButtonIconLabel>
    )
  }
  return (
    <ButtonBasic
        {...props}
        disabled={(props.disabled || props.loading)}
        className={`jm-button ${props.className ? props.className : ''}`}
        type="button"
        onClick={() => {
            if (props.setNewExperience) {
            props.setNewExperience()
            }
            if (props.onOpen) {
            props.onOpen()
            }
            else if (closeModal) {
            props.onClose()
            }
            props.onEvent({
            type: "OnClick",
            origin: "Button",
            props: {
                data: props.data
            }
            })
        }}>
        {
          props.loading && props.loadingLabel ? props.loadingLabel : props.label
        }
    </ButtonBasic>
  )
}

JMButton.defaultProps = {
    className: '',
    data: {},
    default: true,
    primary: false,
    secondary: false,
    disabled: false,
    noBorder: false,
    size: 'md',
    loading: false,
    loadingLabel: null,

}

JMButton.propTypes = {
    onEvent: PropTypes.func.isRequired,
    data: PropTypes.object,
    className: PropTypes.string,
    id:PropTypes.string,
    outlined: PropTypes.bool,
    default: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    borderType: PropTypes.string,
    noBorder: PropTypes.bool,
    noHover: PropTypes.bool,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    colored: PropTypes.bool,
    active: PropTypes.bool,
    fill: PropTypes.bool,
    label: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    loadingLabel: PropTypes.string,
}

export default JMButton;
