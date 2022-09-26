import { Text, RateContainer, ImageContainer } from "./styles";
import { colors } from "../../commons/styles/colors";

import Star from "../../assets/star.svg";

import { RateButton } from "../../components/RateButton";
import { SubmitButton } from "../../components/SubmitButton";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Rate() {
  const navigate = useNavigate();
  const [rate, setRate] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/result/${rate}`);
  };

  return (
    <Card>
      <ImageContainer>
        <img src={Star} alt="star" />
      </ImageContainer>
      <Title>How did we do?</Title>
      <Text color={colors.lightGrey}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Text>
      <form onSubmit={handleSubmit}>
        <RateContainer onChange={(e) => setRate(e.target.value)}>
          <RateButton value="1" rate={rate} />
          <RateButton value="2" rate={rate} />
          <RateButton value="3" rate={rate} />
          <RateButton value="4" rate={rate} />
          <RateButton value="5" rate={rate} />
        </RateContainer>
        <SubmitButton />
      </form>
    </Card>
  );
}

export default Rate;
