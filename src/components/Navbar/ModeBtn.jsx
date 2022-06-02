import styled from "styled-components";

export const ModeBtn = styled.button`
  width: 48px;
  height: 24px;
  background: linear-gradient(225deg, #40db82 0%, #388fe7 98.02%);
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const Label = styled.label.attrs({ for: "input" })`
  width: 18px;
  height: 18px;
  background-color: #252b42;
  position: relative;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  position: absolute;
  width: 76px;
  padding: 3%;
  z-index: 2;
  &:checked + ${Label} {
    transform: translateX(20px);
  }
`;
