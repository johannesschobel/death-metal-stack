import { Form, Link } from '@remix-run/react';
import { IconEye } from '@tabler/icons-react';

export let handle = { picturePath: '/images/auth/register.jpg' };

export default function RegisterPage() {
  return (
    <div>
      <h2 className="h3 text-center mb-3">Register a new Account</h2>

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
        <div className="mb-2">
          <label className="form-label">Password</label>
          <div className="input-group input-group-flat">
            <input
              type="password"
              className="form-control"
              placeholder="Your password"
              autoComplete="off"
            />
            <span className="input-group-text">
              <a
                href="#"
                className="link-secondary"
                title="Show password"
                data-bs-toggle="tooltip"
              >
                <IconEye />
              </a>
            </span>
          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </div>
      </Form>

      <div className="text-center text-muted mt-3">
        Already have an account? <Link to="../login">Login</Link>
      </div>
    </div>
  );
}
