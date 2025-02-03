import { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import { usePrevious } from 'react-use';
import { InputGroup, Form, Button, Dropdown } from 'react-bootstrap';
import SelectInput from '@/Components/Form/SelectInput';
import pickBy from 'lodash/pickBy';
import { ChevronDown } from 'lucide-react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';

export default function FilterBar() {
  const { filters } = usePage<{
    filters: { role?: string; search?: string; trashed?: string };
  }>().props;

  const [opened, setOpened] = useState(false);

  const [values, setValues] = useState({
    role: filters.role || '', // role is used only on users page
    search: filters.search || '',
    trashed: filters.trashed || ''
  });

  const prevValues = usePrevious(values);

  function reset() {
    setValues({
      role: '',
      search: '',
      trashed: ''
    });
  }

  useEffect(() => {
    // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length ? pickBy(values) : {};

      router.get(route(route().current() as string), query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const name = e.target.name;
    const value = e.target.value;

    setValues(values => ({
      ...values,
      [name]: value
    }));

    if (opened) setOpened(false);
  }

  return (
    <div className="d-flex align-items-center w-100 max-w-md me-4">
      <InputGroup>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            className="border d-flex align-items-center"
          >
            <span className="d-none d-md-inline me-2">Filter</span>
            <ChevronDown size={14} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-3" style={{ width: '250px' }}>
            {filters.hasOwnProperty('role') && (
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                >
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="owner">Owner</option>
                </Form.Select>
              </Form.Group>
            )}

            <Form.Group>
              <Form.Label>Trashed</Form.Label>
              <Form.Select
                name="trashed"
                value={values.trashed}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="with">With Trashed</option>
                <option value="only">Only Trashed</option>
              </Form.Select>
            </Form.Group>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          name="search"
          placeholder="Search…"
          autoComplete="off"
          value={values.search}
          onChange={handleChange}
        />
      </InputGroup>

      <Button
        variant="link"
        className="ms-3 text-secondary"
        onClick={reset}
      >
        Reset
      </Button>
    </div>
  );
}
