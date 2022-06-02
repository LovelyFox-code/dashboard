import styled from "styled-components";

export const H1 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
  margin: 0;
`;
export const H3 = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #8c98c6;
`;

export const P = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.positive ? "#1EB589" : "#8C98C6")};
  margin: 0;
`;
export const Span = styled.span`
  font-style: normal;
`;

export const Number = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -2px;
  color: #ffffff;
  margin: 0;
`;
