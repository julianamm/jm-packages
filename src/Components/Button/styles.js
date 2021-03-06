import styled, { keyframes } from "styled-components";
import Color from "../Colors";

const buttonLoadingAnimation = keyframes`
  to {
      transform: rotate(360deg)
  }
`

const ButtonBasic = styled.button`
  background-color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
  border: 1px solid ${ props => Color[props.bgColor] ?  Color[props.bgColor] : Color["Pink-A400"] };
  color: ${ props => Color[props.textColor] ?  Color[props.textColor] : Color["White"] };
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  padding: 0 35px;
  position: relative;

  :before {
    content: '';
    box-sizing: border-box;
    position absolute;
    top:50%;
    left 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -100000px;
    border-radius: 50%;
    border: 2px solid ${Color["Blue-Grey-100"]};
    border-top-color: ${Color["Blue-200"]};
    animation: ${buttonLoadingAnimation} .6s linear infinite;
    ${({ loading }) => loading && `
      margin-left: -10px;
    `}
  }

  :focus {
    outline-style: none;
  }

  :hover {
    background-color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
  }

  :active {
    background-color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
  }

  ${({ outlined }) =>
    outlined &&
    `
    :hover {
        background: transparent;
        border: 2px solid ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
        color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
    }
  `}

  ${({ size }) =>
  size === 'xs' &&
    `
    height: 32px;
    font-size: 12px;
    line-height: 16px;
  `}

  ${({ size }) =>
    size === 'sm' &&
    `
    height: 40px;
    font-size: 14px;
    line-height: 18px;
  `}

  ${({ size }) =>
  size === 'md' &&
    `
    height: 48px;
    font-size: 16px;
    line-height: 20px;
  `}

  ${({ size }) =>
  size === 'lg' &&
    `
    height: 56px;
    font-size: 18px;
    line-height: 22px;
  `}

  ${({ size }) =>
  size === 'xl' &&
    `
    height: 56px;
    font-size: 24px;
    line-height: 28px;
  `}

  ${({ borderType }) =>
    borderType === 'square' &&
    `
    border-radius: 0px;
  `}

  ${({ borderType }) =>
    borderType === 'squareRounded' &&
    `
    border-radius: 7px;
  `}

  ${({ borderType }) =>
    borderType === 'round' &&
    `
    border-radius: 25px;
  `}

  ${({ borderType }) =>
    borderType === 'circle' &&
    `
    border-radius: 50%;
    // height: 56px;
    // width: 56px;
    padding 0 10px;
  `}

  ${({ noBorder }) =>
    noBorder &&
    `
    border: none;
  `}

  ${({ noHover }) =>
    noHover &&
    `
    // pointer-events: none;
    &:not(.disable):hover {
        padding: 0 10px !important;
    }  
  `}

  ${({ fill }) =>
    fill &&
    `
    width: 100%;
    height: 100%;
    min-height: 32px;
  `}

  ${({ primary }) =>
    primary &&
    `
    background-color: ${Color["Pink-A400"]};
    border: 1px solid ${Color["Pink-A400"]};
    :hover {
      background-color: ${Color["Pink-400"]};
      border: 1px solid ${Color["Pink-400"]};
    }
    :active {
      background-color: ${Color["Pink-400"]};
      border: 1px solid ${Color["Pink-400"]};
    }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    background-color: ${Color["Teal-A400"]};
    border: 1px solid ${Color["Teal-A400"]};
    :hover {
      border: 1px solid ${Color["Teal-400"]};
      background-color: ${Color["Teal-400"]};
    }

    :active {
      background-color: ${Color["Teal-400"]};
      border: 1px solid ${Color["Teal-400"]};
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${Color["Blue-Grey-300"]};
    background-color: ${Color["Blue-Grey-50"]};
    border: solid 1px ${Color["Blue-Grey-50"]};
    :hover {
      background-color: ${Color["Blue-Grey-50"]};
      border: 1px solid ${Color["Blue-Grey-50"]};
      color: ${Color["Blue-Grey-300"]};
      cursor: not-allowed;
    }
  `}

  ${({ colored }) =>
    colored &&
    `
    :hover {
        background-color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
    //   border: 5px solid ${Color["Blue-Grey-50"]};
        border: 5px solid ${props => Color[props.bgColor]};
        padding: 0 40px;
        color: ${ props => Color[props.textColor] ?  Color[props.textColor] : Color["White"] };
    }
  `}
`;

export const ButtonOutlined = styled(ButtonBasic)`
    background: transparent;
    border: 2px solid ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
    color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
    :hover {
        background-color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
        border: 1px solid ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
        color: ${ props => Color[props.textColor] ?  Color[props.textColor] : Color["White"] };
    }
`;

export const ButtonIconPlan = styled(ButtonBasic)`
`;

export const ButtonIconLabel = styled(ButtonBasic)`
    display: flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: space-around;
`;

export default ButtonBasic;
