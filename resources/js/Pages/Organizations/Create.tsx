import { Link, useForm } from '@inertiajs/react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import MainLayout from '@/Layouts/MainLayout';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import SelectInput from '@/Components/Form/SelectInput';
import FieldGroup from '@/Components/Form/FieldGroup';

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    country: '',
    postal_code: ''
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route('organizations.store'));
  }

  return (
    <Container fluid>
      <div className="page-header mb-4">
        <h1 className="fs-2 fw-bold">
          <Link href={route('organizations')}>
            Organizations
          </Link>
          <span className="text-primary fw-normal mx-2">/</span>
          Create
        </h1>
      </div>

      <div className="content-card">
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <Row className="g-4">
              <Col md={6}>
                <FieldGroup label="Name" name="name" error={errors.name}>
                  <TextInput
                    name="name"
                    error={errors.name}
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                  />
                </FieldGroup>
              </Col>

              <Col md={6}>
                <FieldGroup label="Email" name="email" error={errors.email}>
                  <TextInput
                    name="email"
                    type="email"
                    error={errors.email}
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                  />
                </FieldGroup>
              </Col>

              <Col md={6}>
                <FieldGroup label="Phone" name="phone" error={errors.phone}>
                  <TextInput
                    name="phone"
                    error={errors.phone}
                    value={data.phone}
                    onChange={e => setData('phone', e.target.value)}
                  />
                </FieldGroup>
              </Col>

              <Col md={6}>
                <FieldGroup label="Address" name="address" error={errors.address}>
                  <TextInput
                    name="address"
                    error={errors.address}
                    value={data.address}
                    onChange={e => setData('address', e.target.value)}
                  />
                </FieldGroup>
              </Col>

              <Col md={6}>
                <FieldGroup label="City" name="city" error={errors.city}>
                  <TextInput
                    name="city"
                    error={errors.city}
                    value={data.city}
                    onChange={e => setData('city', e.target.value)}
                  />
                </FieldGroup>
              </Col>

              <Col md={6}>
                <FieldGroup
                  label="Province/State"
                  name="region"
                  error={errors.region}
                >
                  <TextInput
                    name="region"
                    error={errors.region}
                    value={data.region}
                    onChange={e => setData('region', e.target.value)}
                  />
                </FieldGroup>
              </Col>

              <Col md={6}>
                <FieldGroup label="Country" name="country" error={errors.country}>
                  <SelectInput
                    name="country"
                    error={errors.country}
                    value={data.country}
                    onChange={e => setData('country', e.target.value)}
                    options={[
                      {
                        value: '',
                        label: ''
                      },
                      {
                        value: 'CA',
                        label: 'Canada'
                      },
                      {
                        value: 'US',
                        label: 'United States'
                      }
                    ]}
                  />
                </FieldGroup>
              </Col>

              <Col md={6}>
                <FieldGroup
                  label="Postal Code"
                  name="postal_code"
                  error={errors.postal_code}
                >
                  <TextInput
                    name="postal_code"
                    error={errors.postal_code}
                    value={data.postal_code}
                    onChange={e => setData('postal_code', e.target.value)}
                  />
                </FieldGroup>
              </Col>
            </Row>
          </div>

          <div className="form-footer p-3 d-flex justify-content-end">
            <LoadingButton
              loading={processing}
              type="submit"
              variant="primary"
            >
              Create Organization
            </LoadingButton>
          </div>
        </form>
      </div>
    </Container>
  );
};

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
Create.layout = (page: React.ReactNode) => (
  <MainLayout title="Create Organization" children={page} />
);

export default Create;
