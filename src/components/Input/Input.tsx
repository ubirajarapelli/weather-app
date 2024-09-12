import { StyledInput, StyledLabel } from "./Input.stye";

interface InputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  id,
  name,
  label,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
        {...rest}
      />
    </>
  );
};
