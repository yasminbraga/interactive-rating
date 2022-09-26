import styled from "styled-components";
import { colors } from "../../commons/styles/colors";

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.7rem;
  text-transform: uppercase;
  background-color: ${colors.orange};
  border: none;
  color: ${colors.white};
  font-weight: 600;
  border-radius: 1rem;
  letter-spacing: 2px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: ${colors.white};
    color: ${colors.orange};
  }
`;
