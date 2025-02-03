import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { ChevronDown } from 'lucide-react';
import { Navbar, Dropdown } from 'react-bootstrap';

export default () => {
  const { auth } = usePage<PageProps>().props;

  return (
    <Navbar className="bg-white border-bottom px-3 px-md-4 py-2">
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Account Name */}
        <div className="text-body">{auth.user.account.name}</div>

        {/* User Menu */}
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            className="border-0 bg-transparent text-dark p-0"
            id="user-menu-dropdown"
          >
            <span className="me-1">
              <span>{auth.user.first_name}</span>
              <span className="d-none d-md-inline ms-1">{auth.user.last_name}</span>
            </span>
            <ChevronDown size={20} className="text-secondary" />
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
    </Navbar>
  );
};
