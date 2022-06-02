import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  max-width: 1110px;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.smallGap ? "5px" : "30px")};
  margin: 25px 0;
  align-items: center;
  justify-content: center;
`;
export const RowSpaceAround = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;;
`;

export const DivCenter = styled.div`
  text-align: center;
`;
export const Div90 = styled.div`
    width: 90%;
    margin: auto;
`
