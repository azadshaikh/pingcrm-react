import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Navbar, Offcanvas } from 'react-bootstrap';
import Logo from '@/Components/Logo/Logo';
import MainMenu from '@/Components/Menu/MainMenu';
import { Menu } from 'lucide-react';

export default () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <Navbar
      className="bg-primary flex-shrink-0 px-3 py-2 w-100 w-md-auto"
      style={{ width: '14rem' }}
    >
      <div className="d-flex justify-content-between align-items-center w-100">
        <Link className="navbar-brand" href="/">
          <Logo className="text-white fill-current" width="120" height="28" />
        </Link>

        {/* Mobile Menu Toggle */}
        <Navbar.Toggle
          className="d-md-none border-0 p-0"
          aria-controls="mobile-menu"
          onClick={() => setMenuOpened(true)}
        >
          <Menu color="white" size={32} />
        </Navbar.Toggle>
      </div>

      {/* Mobile Sidebar */}
      <Offcanvas
        id="mobile-menu"
        show={menuOpened}
        onHide={() => setMenuOpened(false)}
        placement="end"
        className="d-md-none"
      >
        <Offcanvas.Header closeButton closeVariant="white" className="bg-primary">
          <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-primary p-0">
          <MainMenu className="p-3" />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};
