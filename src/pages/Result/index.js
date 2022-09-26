import { CardResult, ImageStyle, RatedContainer, Text } from "./styles";

import Thanks from "../../assets/thanks.svg";

import { Title } from "../../components/Title";
import { useParams } from "react-router-dom";

function Result() {
  const { rate } = useParams();
  return (
    <CardResult>
      <ImageStyle src={Thanks} alt="star" />
      <RatedContainer>You selected {rate} out of 5</RatedContainer>
      <Title>Thank you!</Title>

      <Text>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Text>
    </CardResult>
  );
}

export default Result;
