import { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Alert } from 'react-bootstrap';

export default function FlashedMessages() {
  const [visible, setVisible] = useState(true);
  const { flash, errors } = usePage<PageProps>().props;
  const formErrors = Object.keys(errors).length;

  useEffect(() => {
    setVisible(true);
  }, [flash, errors]);

  return (
    <div className="mb-4">
      {flash.success && visible && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setVisible(false)}
        >
          {flash.success}
        </Alert>
      )}

      {flash.error && visible && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setVisible(false)}
        >
          {flash.error}
        </Alert>
      )}

      {formErrors > 0 && visible && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setVisible(false)}
        >
          There are {formErrors} form errors.
        </Alert>
      )}
    </div>
  );
}
