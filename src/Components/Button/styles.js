import styled from "styled-components";
import Color from "../Colors";

const ButtonBasic = styled.button`
  background-color: ${ props => Color[props.bgColor] ? Color[props.bgColor] : Color["Pink-A400"] };
  border: 1px solid ${ props => Color[props.bgColor] ?  Color[props.bgColor] : Color["Pink-A400"] };
  color: ${ props => Color[props.textColor] ?  Color[props.textColor] : Color["White"] };
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  padding: 0 30px;

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
        border: 2px solid ${Color["Pink-A400"]};
        color: ${Color["Pink-A400"]};
    }
  `}

  ${({ size }) =>
  size === 'xs' &&
    `
    height: 24px;
    font-size: 12px;
    line-height: 16px;
  `}

  ${({ size }) =>
    size === 'sm' &&
    `
    height: 32px;
    font-size: 14px;
    line-height: 18px;
  `}

  ${({ size }) =>
  size === 'md' &&
    `
    height: 40px;
    font-size: 16px;
    line-height: 20px;
  `}

  ${({ size }) =>
  size === 'lg' &&
    `
    height: 48px;
    font-size: 18px;
    line-height: 22px;
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

  ${({ noBorder }) =>
    noBorder &&
    `
    border: none;
  `}

  ${({ fill }) =>
    fill &&
    `
    width: 100%;
    height: 100%;
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
        padding: 0 35px;
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

export default ButtonBasic;
