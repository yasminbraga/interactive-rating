import { SubmitBtn } from "./styles";

export function SubmitButton(props) {
  return (
    <SubmitBtn type="submit" color={props.color}>
      Submit
    </SubmitBtn>
  );
}
