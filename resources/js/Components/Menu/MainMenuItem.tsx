import { Link } from '@inertiajs/react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';

interface MainMenuItemProps {
  icon?: React.ReactNode;
  link: string;
  text: string;
}

export default function MainMenuItem({ icon, link, text }: MainMenuItemProps) {
  const isActive = route().current(link + '*');

  const itemClasses = classNames(
    'd-flex align-items-center gap-2 px-3 py-2 text-decoration-none rounded',
    {
      'bg-primary-dark text-white': isActive,
      'text-light opacity-75 hover-white': !isActive
    }
  );

  return (
    <Nav.Item className="mb-1">
      <Link
        href={route(link)}
        className={itemClasses}
      >
        <span>{icon}</span>
        <span className="fw-medium">{text}</span>
      </Link>
    </Nav.Item>
  );
}
