import { FC, InputHTMLAttributes, useState } from "react";
import { BaseInput } from "../BaseInput";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const PhoneInput: FC<Props> = ({ label, value, onChange, ...props }) => {
  const [phone, setPhone] = useState(value);
  const [focused, setFocused] = useState(false);

  return (
    <BaseInput
      label={label}
      value={phone}
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};
