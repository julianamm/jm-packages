import styled from "styled-components";
import Color from "../Colors";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: fixed;
    z-index: -99;
` 
