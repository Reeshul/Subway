import React from "react";
import styled from "styled-components";
import SubwayLogo from "./SubwayLogo.svg";
import { Grey } from "../Styles/colors";

const NavbarStyled = styled.div`
  background-color: ${Grey};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 11;
`;

const Logo = styled.img`
  vertical-align: middle;
`;

export default () => {
  return (
    <NavbarStyled>
      <Logo src={SubwayLogo} />
    </NavbarStyled>
  );
};
