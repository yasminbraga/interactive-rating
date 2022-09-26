import { NumberButton, InputRadio } from "./styles";

import { colors } from "../../commons/styles/colors";

export function RateButton(props) {
  return (
    <>
      <NumberButton
        htmlFor={`rate${props.value}`}
        style={
          props.rate === props.value
            ? { background: colors.lightGrey, color: colors.white }
            : { background: colors.darkBlue }
        }
      >
        {props.value}
      </NumberButton>
      <InputRadio
        type="radio"
        name="rate"
        value={props.value}
        id={`rate${props.value}`}

        // onClick={(ev) => props.onClick(ev.target.value)}
      />
    </>
  );
}
