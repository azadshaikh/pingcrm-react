import { Button } from 'react-bootstrap';
import { Trash2 } from 'lucide-react';
import Alert from '@/Components/Alert/Alert';

interface TrashedMessageProps {
  message: string;
  onRestore: () => void;
}

export default function TrashedMessage({
  message,
  onRestore
}: TrashedMessageProps) {
  return (
    <Alert
      variant="warning"
      message={message}
      icon={<Trash2 size={20} />}
      action={
        <Button
          variant="link"
          size="sm"
          onClick={onRestore}
          className="text-warning p-0 fw-medium"
        >
          Restore
        </Button>
      }
    />
  );
}
