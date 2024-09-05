import { StyledInput } from "./Input.stye";

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
      <label htmlFor={id}>{label}</label>
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
