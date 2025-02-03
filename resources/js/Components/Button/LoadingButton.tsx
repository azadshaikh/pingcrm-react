import { Button, Spinner } from 'react-bootstrap';
import classNames from 'classnames';

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  loading: boolean;
}

export default function LoadingButton({
  loading,
  className,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={classNames('d-flex align-items-center', className)}
      {...props}
    >
      {loading && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          className="me-2"
          aria-hidden="true"
        />
      )}
      {children}
    </Button>
  );
}
