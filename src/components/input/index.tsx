import { forwardRef, useState } from "react";
import { propsInput } from "./types";
import { StyledTextField } from "./styles";
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Input = forwardRef<HTMLInputElement, propsInput>(
  ({ label,password, required, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
     <span className="container_Input">
      <StyledTextField
        label={label}
        placeholder={`Enter your ${label}`}
        inputRef={ref}
        type={password ? (showPassword ? "text" : "password") : "text"}
        variant="outlined"
        style={{ maxWidth: "90%",borderRadius: "10px" }}
        fullWidth
        required={required}
        {...rest}
      />
      {password &&
       <div onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </div>}
     </span>
    );
  }
);

export default Input;