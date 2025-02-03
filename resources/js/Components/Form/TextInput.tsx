import { Form } from 'react-bootstrap';

interface TextInputProps {
  name?: string;
  error?: string;
  className?: string;
  [key: string]: any;
}

export default function TextInput({
  name,
  className,
  error,
  ...props
}: TextInputProps) {
  return (
    <Form.Control
      id={name}
      name={name}
      isInvalid={!!error}
      className={className}
      {...props}
    />
  );
}
