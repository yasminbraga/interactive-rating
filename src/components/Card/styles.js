import styled from "styled-components";

export const CardStyle = styled.div`
  background-image: radial-gradient(
    circle farthest-side at 50% 0%,
    hsl(215, 27%, 17%) 30%,
    hsl(215, 27%, 13%) 90%
  );

  border-radius: 26px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.7px);
  -webkit-backdrop-filter: blur(1.7px);

  max-width: 370px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
`;
