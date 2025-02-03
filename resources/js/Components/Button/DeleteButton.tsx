import { Button } from 'react-bootstrap';

interface Props {
  onDelete: () => void;
  children: React.ReactNode;
}

export default function DeleteButton({ onDelete, children }: Props) {
  return (
    <Button
      variant="link"
      className="text-danger p-0 border-0 text-decoration-none"
      onClick={onDelete}
      tabIndex={-1}
    >
      {children}
    </Button>
  );
}
