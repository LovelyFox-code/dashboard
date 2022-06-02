import React from "react";
import { ModeBtn, Input, Label } from "./ModeBtn";
import styled from "styled-components";
import { Row } from "../Grid/Grid";
import { H1, P } from "../Typography/Typography";

const Nav = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3% 0;
`;
const Logo = styled.div`
  width: auto;
`;
function Navbar() {
  return (
    <Nav>
      <Logo>
        <H1>Social Media Dashboard</H1>
        <P>Total Followers: 23,004</P>
      </Logo>
      <Row>
        <ModeBtn>
          <Input />
          <Label></Label>
        </ModeBtn>
      </Row>
    </Nav>
  );
}

export default Navbar;
