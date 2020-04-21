import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const JMCardBase = props => {
  return (
    <S.Card
        {...props}
        onClick={event => {
            if (props.onEvent) {
            props.onEvent({
                data: props,
                type: 'onClick',
                target: 'JMCardBase'
            })
            };
        }}
        id={props.id}
        // draggable={props.draggable}
        // onDragEnter={props.onDragEnter}
        // onDragLeave={props.onDragLeave}
        // onDragStart={props.onDragStart}
    >
        {props.children}
    </S.Card>
  )

}

JMCardBase.defaultProps = {
    onEvent: () => {},
    className: '',
    noPadding: false,
    noBorder: false,
    noHover: false,
    borderTopColor: '',
    width: '',
    height: '',
}

JMCardBase.propTypes = {
    onEvent: PropTypes.func,
    data: PropTypes.object,
    className: PropTypes.string,
    noPadding: PropTypes.bool,
    noBorder: PropTypes.bool,
    noHover: PropTypes.bool,
    borderTopColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}

export default JMCardBase;
