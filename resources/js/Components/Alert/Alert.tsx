import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { Check, CircleX, TriangleAlert } from 'lucide-react';
import CloseButton from '@/Components/Button/CloseButton';

interface AlertProps {
  message: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
  variant?: 'success' | 'danger' | 'warning';
}

export default function Alert({
  icon,
  action,
  message,
  variant = 'success',
  onClose
}: AlertProps) {
  const iconMap = {
    success: <Check size={20} />,
    danger: <CircleX size={20} />,
    warning: <TriangleAlert size={20} />
  };

  return (
    <BootstrapAlert
      variant={variant}
      dismissible={!!onClose}
      onClose={onClose}
      className="d-flex align-items-center justify-content-between mb-4"
    >
      <div className="d-flex align-items-center gap-2">
        <span className="d-flex align-items-center">
          {icon || iconMap[variant]}
        </span>
        <span className="py-1 fw-medium">{message}</span>
      </div>
      {action && <div className="ms-auto me-2">{action}</div>}
    </BootstrapAlert>
  );
}
