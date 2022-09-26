import styled from "styled-components";

import { colors } from "../../commons/styles/colors";
import { CardStyle } from "../../components/Card/styles";

export const CardResult = styled(CardStyle)`
  align-items: center;
  padding: 2.5rem 1.7rem;
`;

export const ImageStyle = styled.img`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RatedContainer = styled.p`
  color: ${colors.orange};
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  background: ${colors.darkBlue};
  padding: 6px 16px;
  border-radius: 20px;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const Text = styled.p`
  color: ${colors.lightGrey};
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`;
