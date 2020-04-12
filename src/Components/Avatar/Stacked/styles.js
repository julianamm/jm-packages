import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.span`
    margin-left: -5px;
`;

export const Rounded = styled.div`
    background-color: ${Color["Blue-Grey-300"]};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${Color["Blue-Grey-50"]};
    text-align: center;
    display: grid;
    align-items: center;
    cursor: default;
`;

export const Tooltip = styled.span`
    opacity: 0;
    position: absolute;
    margin-top: -30px;
    color: ${Color.White};
    background-color: ${Color["Blue-Grey-800"]};
    padding: 4px 8px 4px 8px;
    border-radius: 3px;
    font-family: Roboto;
    font-size: 12px;

  ${Wrapper}:hover & {
    opacity: 1;
  } 
`;
