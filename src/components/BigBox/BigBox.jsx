import React from "react";
import styled from "styled-components";
import { Row, DivCenter } from "../Grid/Grid";
import { H3, P, Span } from "../Typography/Typography";

const Box = styled.div`
  width: 250px;
  background: #252b42;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 4px solid #178FF5;;
  &:hover{
      background: #333A55;
    }
`;
const Number = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -2px;
  color: #ffffff;
`;

function BigBox(props) {
  return (
    <Box>
      <Row smallGap>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="Path" d={props.icon} fill={props.fill} />
          </svg>
        <P>@{props.user}</P>
      </Row>
      <DivCenter>
        <Number>{props.followers}</Number>
        <H3>Followers</H3>
      </DivCenter>
      <Row smallGap>
        
          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Path 3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 4L4 0L8 4H0Z"
              fill="#1EB589"
            />
          </svg>
        <P>
          <Span>{props.changeToday}</Span> Today
        </P>
      </Row>
    </Box>
  );
}

export default BigBox;
