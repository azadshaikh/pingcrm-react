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

  const itemClasses = classNames('d-flex align-items-center py-2 text-decoration-none', {
    'text-white': isActive,
    'text-light opacity-75 hover-white': !isActive
  });

  const iconClasses = classNames('me-2', {
    'text-white': isActive,
    'text-light': !isActive
  });

  return (
    <Nav.Item className="mb-2">
      <Link
        href={route(link)}
        className={itemClasses}
      >
        <span className={iconClasses}>{icon}</span>
        <span>{text}</span>
      </Link>
    </Nav.Item>
  );
}
