import { Form } from 'react-bootstrap';

interface SelectInputProps {
  name?: string;
  error?: string;
  className?: string;
  options: { value: string; label: string }[];
  [key: string]: any;
}

export default function SelectInput({
  name,
  error,
  className,
  options = [],
  ...props
}: SelectInputProps) {
  return (
    <Form.Select
      id={name}
      name={name}
      isInvalid={!!error}
      className={className}
      {...props}
    >
      {options?.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </Form.Select>
  );
}
