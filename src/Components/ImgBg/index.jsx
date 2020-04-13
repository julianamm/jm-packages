import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const ImgBg = props => {
    return (
        <S.Wrapper image={props.image} />
    )
}

ImgBg.defaultProps = {
    className: '',
};

export const IconPropTypes = {
    className: PropTypes.string,
    image: PropTypes.string.isRequired,
};

ImgBg.propTypes = IconPropTypes;

export default ImgBg;
