import React from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import Logo from '@/Components/Logo/Logo';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import FieldGroup from '@/Components/Form/FieldGroup';
import { CheckboxInput } from '@/Components/Form/CheckboxInput';

export default function LoginPage() {
  const { data, setData, errors, post, processing } = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: true
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route('login.store'));
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Head title="Login" />

      <div className="col-md-6 col-lg-4">
        <div className="card shadow">
          <div className="card-header text-center bg-white border-0 pt-4">
            <Logo
              className="mx-auto d-block mb-4"
              height={50}
            />
            <h4 className="card-title mb-4">Welcome Back!</h4>
          </div>

          <div className="card-body px-4 py-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <FieldGroup label="Email" name="email" error={errors.email}>
                  <TextInput
                    name="email"
                    type="email"
                    error={errors.email}
                    value={data.email}
                    className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('email', e.target.value)}
                  />
                </FieldGroup>
              </div>

              <div className="mb-3">
                <FieldGroup
                  label="Password"
                  name="password"
                  error={errors.password}
                >
                  <TextInput
                    type="password"
                    error={errors.password}
                    value={data.password}
                    className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('password', e.target.value)}
                  />
                </FieldGroup>
              </div>

              <div className="mb-3">
                <FieldGroup>
                  <CheckboxInput
                    label="Remember Me"
                    name="remember"
                    id="remember"
                    checked={data.remember || false}
                    className="form-check-input"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('remember', e.target.checked)}
                  />
                </FieldGroup>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <a className="text-decoration-none" href="#reset-password">
                  Forgot password?
                </a>
                <LoadingButton
                  type="submit"
                  loading={processing}
                  className="btn btn-primary"
                >
                  Login
                </LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
