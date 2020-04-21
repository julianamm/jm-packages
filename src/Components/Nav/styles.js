import styled from "styled-components";
import Color from "../Colors";

export const Navbar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    background: ${props => Color[props.navBgColor]};
`