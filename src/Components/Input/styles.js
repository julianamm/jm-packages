import styled, { keyframes } from "styled-components";
import Colors from "../Colors";

const inputLoadingAnimation = keyframes`
  to {
    transform: rotate(360deg)
  }
`
export const StyledContainer = styled.div`
  position: relative;
`
export const StyledIconLoading = styled.span`
  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 12px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid ${Colors['Blue-Grey-200']};
    border-top-color: ${Colors['Blue-500']};
    animation: ${inputLoadingAnimation} .6s linear infinite;
  }
`
export const StyledErrorMessage = styled.span`
  color: ${Colors['Red-400']};
  top: 45px;
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 15px;
  font-size: 12px;
`
export const StyledIconError = styled.span`
  color: ${Colors['Red-400']};
  top: 45px;
  position: absolute;
  width: 100%;
  :before {
    content: '!';
    color: #fff ;
    padding-left: 6px;
    box-sizing: border-box;
    position: absolute;
    top: -21px;;
    right: 6px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: ${Colors['Red-400']};
  }
`
export const Input = styled.input`
  position: relative;
  border: 1px solid ${Colors["Blue-Grey-100"]};
  border-radius: 5px;
  color: ${Colors["Blue-Grey-500"]};
  font-size: 14px;
  padding: 9px 12px;
  margin: 4px 0;
  width: 100%;
  min-width: 400px;
  box-sizing: border-box;
  ::placeholder {
    font-size: 14px;
    color: ${Colors["Blue-Grey-100"]};
  }
  :focus {
    outline: none;
  }

  ${({ disabled }) => disabled && `
    background-color: ${Colors["Blue-Grey-50"]};
    color: ${Colors["Blue-Grey-200"]};
    ::placeholder {
      color: ${Colors["Blue-Grey-100"]};
    }
  `}

  ${({ success }) => success && `
    color: ${Colors["Green-500"]};
    border-color: ${Colors["Green-500"]};
    ::placeholder {
      color: ${Colors["Green-100"]};
    }
  `}

  ${({ error }) => error && `
    color: ${Colors["Red-400"]};
    border-color: ${Colors["Red-400"]};
    ::placeholder {
      color: ${Colors["Red-400"]};
    }
  `}

  ${({ loading }) => loading && `
    background-color: ${Colors["Grey-50"]};
    border-color: ${Colors["Blue-200"]};
    color: ${Colors["Blue-300"]};
  `}
`;

export default Input;