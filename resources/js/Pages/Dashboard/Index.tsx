import { Link } from '@inertiajs/react';
import { Button, Container } from 'react-bootstrap';
import MainLayout from '@/Layouts/MainLayout';

function DashboardPage() {
  return (
    <Container fluid>
      <h1 className="mb-4 fs-2 fw-bold">Dashboard</h1>
      <p className="mb-4 lead">
        Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how
        <a
          className="mx-1 text-primary text-decoration-underline"
          href="https://inertiajs.com"
        >
          Inertia.js
        </a>
        works with
        <a
          className="ms-1 text-primary text-decoration-underline"
          href="https://reactjs.org/"
        >
          React
        </a>
        .
      </p>
      <div>
        <Button href="/500" variant="primary" className="me-2">
          500 error
        </Button>
        <Button href="/404" variant="primary">
          404 error
        </Button>
      </div>
    </Container>
  );
}

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
DashboardPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Dashboard" children={page} />
);

export default DashboardPage;
