import { Form } from 'react-bootstrap';

interface CheckboxInputProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

export function CheckboxInput({ label, name, ...props }: CheckboxInputProps) {
  return (
    <Form.Check
      type="checkbox"
      id={name}
      name={name}
      label={label}
      className="user-select-none"
      {...props}
    />
  );
}
