import React from "react";
import styled from "styled-components";
import { Row, RowSpaceAround } from "../Grid/Grid";
import { P, H1 } from "../Typography/Typography";

const Card = styled.div`
  width: 250px;
  padding-top: 18px;
  background: #252b42;
  &:hover{
      background: #333A55;
    }
`;

function SmallBox(props) {
  return (
    <Card>
      <RowSpaceAround>
        <P>{props.name}</P>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="Path" d={props.icon} fill={props.fill} />
        </svg>
      </RowSpaceAround>
      <RowSpaceAround>
        <H1>{props.number}</H1>
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
          <P>{props.percentage}%</P>
        </Row>
      </RowSpaceAround>
    </Card>
  );
}

export default SmallBox;
