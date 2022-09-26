import styled from "styled-components";

export const ImageContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 1.7rem;

  img {
    height: 15px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const RateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 1.5rem 0;
`;
