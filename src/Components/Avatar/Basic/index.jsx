import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Avatar = props => {
  return (

    <S.Avatar
      center={props.center}
      image={props.image}
      size={props.size}
      borderType={props.borderType}
      showCursor={props.showCursor}
      loading={props.loading}
      uploading={100 - props.uploading}
      onClick={event => {
        if (props.onEvent) {
          props.onEvent({
            data: props.data,
            type: 'onClick',
            target: 'Avatar'
          })
        };
      }}
    >
      {props.label}
    </S.Avatar>
  );
};

Avatar.defaultProps = {
  content: '',
  showCursor: true,
  size: 'lg',
  borderType: 'round',
};

Avatar.propTypes = {
  image: PropTypes.string,
  center: PropTypes.bool,
  showCursor: PropTypes.bool,
  size: PropTypes.string,
  borderType: PropTypes.string,
};

export default Avatar;

