import { Form } from 'react-bootstrap';

interface FieldGroupProps {
  name?: string;
  label?: string;
  error?: string;
  children: React.ReactNode;
}

export default function FieldGroup({
  label,
  name,
  error,
  children
}: FieldGroupProps) {
  return (
    <Form.Group className="mb-3">
      {label && (
        <Form.Label htmlFor={name}>
          {label}:
        </Form.Label>
      )}
      {children}
      {error && (
        <Form.Control.Feedback type="invalid" className="d-block">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}
