import React from 'react';
import PropTypes from 'prop-types';
import ButtonBasic, { ButtonOutlined } from './styles';

const Button = props => {

  const [closeModal, setCloseModal] = React.useState(props.closeModal);
  React.useEffect(() => {
    setCloseModal(props.closeModal);
  }, [props.closeModal])

  if (props.outline) {
    return (
      <ButtonOutlined
        {...props}
        disabled={(props.disabled || props.loading)}
        // id={props.id}
        // outlined={props.outlined}
        // default={props.default}
        // primary={props.primary}
        // secondary={props.secondary}
        // disabled={props.disabled}
        // size={props.size}
        // borderType={props.borderType}
        // noBorder={props.noBorder}
        // textColor={props.textColor}
        // bgColor={props.bgColor}
        // colored={props.colored}
        // active={props.active}
        // fill={props.fill}
        className={`jm-button ${props.className ? props.className : ''}`}
        // type="button"
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
  return (
    <ButtonBasic
        {...props}
        disabled={(props.disabled || props.loading)}
        // id={props.id}
        // outlined={props.outlined}
        // default={props.default}
        // primary={props.primary}
        // secondary={props.secondary}
        // disabled={props.disabled}
        // size={props.size}
        // borderType={props.borderType}
        // noBorder={props.noBorder}
        // textColor={props.textColor}
        // bgColor={props.bgColor}
        // colored={props.colored}
        // active={props.active}
        // fill={props.fill}
        className={`jm-button ${props.className ? props.className : ''}`}
        // type="button"
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

Button.defaultProps = {
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

Button.propTypes = {
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
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    colored: PropTypes.bool,
    active: PropTypes.bool,
    fill: PropTypes.bool,
    label: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    loadingLabel: PropTypes.string,
}

export default Button;
