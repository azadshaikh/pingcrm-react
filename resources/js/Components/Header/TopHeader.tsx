import { Link } from '@inertiajs/react';
import Logo from '@/Components/Logo/Logo';

export default () => {
  return (
    <Link href="/" className="d-block text-decoration-none">
      <Logo className="text-white fill-current" width="120" height="28" />
    </Link>
  );
};
