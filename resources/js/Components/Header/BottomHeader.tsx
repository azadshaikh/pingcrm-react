import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { ChevronDown, Bell, Menu } from 'lucide-react';
import { Navbar, Dropdown, Button } from 'react-bootstrap';
import { useSidebar } from '@/Contexts/SidebarContext';

export default () => {
  const { auth } = usePage<PageProps>().props;
  const { toggleSidebar } = useSidebar();

  return (
    <Navbar className="bg-white border-bottom px-4 py-2">
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Left Section */}
        <div className="d-flex align-items-center">
          {/* Mobile Menu Toggle */}
          <Button
            variant="link"
            className="text-dark p-0 d-lg-none me-3"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </Button>

          {/* Organization Name */}
          <div className="d-flex align-items-center">
            <span className="text-dark fw-medium">
              {auth.user.account.name}
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          {/* Notifications */}
          <Button variant="link" className="text-secondary p-0">
            <Bell size={20} />
          </Button>

          {/* User Menu */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="link"
              className="text-dark p-0 text-decoration-none border-0 d-flex align-items-center gap-2"
              id="user-menu-dropdown"
            >
              {/* User Avatar */}
              <div
                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px' }}
              >
                <span className="text-white">
                  {auth.user.first_name[0]}
                </span>
              </div>

              <div>
                <span className="me-1">{auth.user.first_name}</span>
                <ChevronDown size={16} className="text-secondary" />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                href={route('users.edit', auth.user.id)}
              >
                My Profile
              </Dropdown.Item>

              <Dropdown.Item
                as={Link}
                href={route('users')}
              >
                Manage Users
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item
                as={Link}
                href={route('logout')}
                method="delete"
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
};
