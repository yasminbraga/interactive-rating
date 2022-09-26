import styled from "styled-components";

import { colors } from "../../commons/styles/colors";

export const NumberButton = styled.label`
  background: ${colors.darkBlue};
  border: none;
  color: ${colors.lightGrey};
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s;

  &:hover {
    background: ${colors.orange} !important;
    color: ${colors.white};
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`;
