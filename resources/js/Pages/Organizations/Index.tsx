import { Link, usePage } from '@inertiajs/react';
import { Button, Container } from 'react-bootstrap';
import MainLayout from '@/Layouts/MainLayout';
import FilterBar from '@/Components/FilterBar/FilterBar';
import Pagination from '@/Components/Pagination/Pagination';
import { Organization, PaginatedData } from '@/types';
import Table from '@/Components/Table/Table';
import { Trash2 } from 'lucide-react';

function Index() {
  const { organizations } = usePage<{
    organizations: PaginatedData<Organization>;
  }>().props;

  const {
    data,
    meta: { links }
  } = organizations;

  return (
    <Container fluid>
      <div className="page-header mb-4">
        <h1 className="fs-2 fw-bold">Organizations</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <FilterBar />
        <Button
          href={route('organizations.create')}
          variant="primary"
          as={Link as any}
        >
          <span>Create</span>
          <span className="d-none d-md-inline"> Organization</span>
        </Button>
      </div>

      <div className="content-card">
        <Table
          columns={[
            {
              label: 'Name',
              name: 'name',
              renderCell: row => (
                <div className="d-flex align-items-center">
                  {row.name}
                  {row.deleted_at && (
                    <Trash2 size={16} className="ms-2 text-secondary" />
                  )}
                </div>
              )
            },
            { label: 'City', name: 'city' },
            { label: 'Phone', name: 'phone', colSpan: 2 }
          ]}
          rows={data}
          getRowDetailsUrl={row => route('organizations.edit', row.id)}
        />
      </div>

      <div className="mt-4">
        <Pagination links={links} />
      </div>
    </Container>
  );
}

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Index.layout = (page: React.ReactNode) => (
  <MainLayout title="Organizations" children={page} />
);

export default Index;
