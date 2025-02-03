import { Button } from 'react-bootstrap';
import { X } from 'lucide-react';

interface CloseButtonProps {
  color?: 'danger' | 'success';
  onClick?: () => void;
}

export default function CloseButton({ color = 'danger', onClick }: CloseButtonProps) {
  return (
    <Button
      variant="link"
      className={`p-1 text-${color} border-0`}
      onClick={onClick}
    >
      <X size={16} />
    </Button>
  );
}
