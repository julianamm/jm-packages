import styled from "styled-components";
import Color from "../../Colors";

// export const Top = styled.span`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 50%;
//     background: red;
// `
// export const Bottom = styled.span`
//     position: absolute;
//     top: 50%;
//     left: 0;
//     width: 100%;
//     background: blue;
//     height: 50%;
// `
export const Card = styled.div`
    background-color: ${ props => Color[props.cardBgColor] ? Color[props.cardBgColor] : Color["White"] };
    border-radius: ${props => props.noBorder ? "0": "6px"};
    padding: 24px;
    position: relative;
    box-sizing: border-box;
    border-top: ${ props => Color[props.borderTopColor] ? `4px solid ${Color[props.borderTopColor]}` : 'none'};

    :hover {
        box-shadow: ${props => !props.noHover && `0 4px 14px 0 rgba(0, 0, 0, 0.1)`};
    }

    ${({ noPadding }) => noPadding &&`
        padding: 0;
    `}

    ${({ width }) => width &&`
        width: ${width};
    `}
    ${({ height }) => height &&`
        height: ${height};
    `}
`

