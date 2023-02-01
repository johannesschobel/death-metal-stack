import { Form } from '@remix-run/react';

export let handle = { picturePath: '/images/auth/reset-password.jpg' };

export default function LoginPage() {
  return (
    <div>
      <h2 className="h3 text-center mb-3">Reset your password</h2>

      <Form action="./" method="post" autoComplete="off" noValidate>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="your@email.com"
            autoComplete="off"
          />
        </div>

        <div className="form-footer">
          <button type="submit" className="btn btn-primary w-100">
            Send Instructions
          </button>
        </div>
      </Form>
    </div>
  );
}
