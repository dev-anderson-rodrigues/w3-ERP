import { forwardRef } from "react";
import { propsInput } from "./types";
import { StyledTextField } from "./styles";

const Input = forwardRef<HTMLInputElement, propsInput>(
  ({ label, required, ...rest }, ref) => {
    return (
      <StyledTextField
        label={label}
        placeholder={`Enter your ${label}`}
        inputRef={ref}
        variant="outlined"
        style={{ maxWidth: "90%",borderRadius: "10px" }}
        fullWidth
        required={required}
        {...rest}
      />
    );
  }
);

export default Input;