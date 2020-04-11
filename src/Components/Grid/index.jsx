import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../Colors/index';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    background-color: ${props => Color[props.color]};

    ${({ cover }) => cover && `
        background-image: url(${cover});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    `}

    ${({ lg }) => lg && `
        width: 1280px;
    `}

    ${({ md }) => md && `
        width: 1024px;
    `}

    ${({ sm }) => sm && `
        width: 768px;
    `}

    ${({ xs }) => xs && `
        width: 320px;
    `}

    ${({ spaceAround }) => spaceAround && `
        justify-content: space-around;
    `}

    ${({ spaceBetween }) => spaceBetween && `
        justify-content: space-between;
    `}

    ${({ justifyCenter }) => justifyCenter && `
        justify-content: center;
    `}

    ${({ justifyRight }) => justifyRight && `
        justify-content: flex-end;
    `}

    ${({ justifyLeft }) => justifyLeft && `
        justify-content: flex-start;
    `}

    ${({ alignCenter }) => alignCenter && `
        align-items: center;
    `}

    ${({ alignRight }) => alignRight && `
        align-items: flex-end;
    `}

    ${({ alignLeft }) => alignLeft && `
        align-items: flex-start;
    `}

    ${({ fullHeight }) => fullHeight && `
        height: 100vh;
    `}

    ${({ fullWidth }) => fullWidth && `
        width: 100% !important;
    `}

    ${({ fixed }) => fixed && `
        position: fixed;
    `}

    ${({ flexWrap }) => flexWrap && `
        flex-wrap: wrap;
    `}

    ${({ responsive }) => responsive && `
        @media only screen and (max-width: 768px) {
            flex-direction: column;
        }
    `}

    ${({ mobileDisplayNone }) => mobileDisplayNone && `
        @media screen and (max-width: 768px) {
            display: none;
        }
    `}

    ${({ margin }) => margin && `
        margin: ${margin}px;
    `}

    ${({ marginTop }) => marginTop && `
        margin-top: ${marginTop}px;
    `}

    ${({ marginBottom }) => marginBottom && `
        margin-bottom: ${marginBottom}px;
    `}

    ${({ marginRight }) => marginRight && `
        margin-right: ${marginRight}px;
    `}

    ${({ marginLeft }) => marginLeft && `
        margin-left: ${marginLeft}px;
    `}

    ${({ padding }) => padding && `
        padding: ${padding}px;
    `}

    ${({ paddingTop }) => paddingTop && `
        padding-top: ${paddingTop}px;
    `}

    ${({ paddingBottom }) => paddingBottom && `
        padding-bottom: ${paddingBottom}px;
    `}

    ${({ paddingRight }) => paddingRight && `
        padding-right: ${paddingRight}px;
    `}

    ${({ paddingLeft }) => paddingLeft && `
        padding-left: ${paddingLeft}px;
    `}

    ${({ overflowY }) => overflowY && `
        overflow-y: ${overflowY};
    `}

    ${({ height }) => height && `
        height: ${height}px;
    `}

    ${({ width }) => width && `
        @media only screen and (min-width: 768px) {
            width: ${width};
        }
        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    `}

    ${({ autoWidth }) => autoWidth && `
        width: auto;
    `}
`

Container.propTypes = {
    color: PropTypes.string,
    cover: PropTypes.bool,
    lg: PropTypes.bool,
    md: PropTypes.bool,
    sm: PropTypes.bool,
    xs: PropTypes.bool,
    spaceAround: PropTypes.bool,
    spaceBetween: PropTypes.bool,
    justifyCenter: PropTypes.bool,
    justifyRight: PropTypes.bool,
    justifyLeft: PropTypes.bool,
    alignCenter: PropTypes.bool,
    alignRight: PropTypes.bool,
    alignLeft: PropTypes.bool,
    fullHeight: PropTypes.bool,
    fullWidth: PropTypes.bool,
    fixed: PropTypes.bool,
    flexWrap: PropTypes.bool,
    responsive: PropTypes.bool,
    mobileDisplayNone: PropTypes.bool,
    margin: PropTypes.bool,
    marginTop: PropTypes.bool,
    marginBottom: PropTypes.bool,
    marginRight: PropTypes.bool,
    marginLeft: PropTypes.bool,
    padding: PropTypes.bool,
    paddingTop: PropTypes.bool,
    paddingBottom: PropTypes.bool,
    paddingRight: PropTypes.bool,
    paddingLeft: PropTypes.bool,
    overflowY: PropTypes.bool,
    height: PropTypes.bool,
    width: PropTypes.bool,
    autoWidth: PropTypes.bool,
}

Container.defaultProps = {
    color: '',
    cover: false,
    lg: false,
    md: false,
    sm: false,
    xs: false,
    spaceAround: false,
    spaceBetween: false,
    justifyCenter: false,
    justifyRight: false,
    justifyLeft: false,
    alignCenter: false,
    alignRight: false,
    alignLeft: false,
    fullHeight: false,
    fullWidth: false,
    fixed: false,
    flexWrap: false,
    responsive: false,
    mobileDisplayNone: false,
    margin: false,
    marginTop: false,
    marginBottom: false,
    marginRight: false,
    marginLeft: false,
    padding: false,
    paddingTop: false,
    paddingBottom: false,
    paddingRight: false,
    paddingLeft: false,
    overflowY: false,
    height: false,
    width: false,
    autoWidth: false,
}

export const Row = styled(Container)`
    flex-direction: row;
    margin: initial;
`

export const Column = styled(Container)`
    margin: initial;
`
Row.propTypes =  Container.propTypes;
Row.defaultProps =  Container.defaultProps;

Column.propTypes =  Container.propTypes;
Column.defaultProps =  Container.defaultProps;

export default Container;