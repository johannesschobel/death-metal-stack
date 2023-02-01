import { Form, Link } from '@remix-run/react';
import { IconEye } from '@tabler/icons-react';
import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export let handle = { picturePath: '/images/auth/login.jpg' };

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  return redirect('/app/dashboard');
}

export default function LoginPage() {
  return (
    <div>
      <h2 className="h3 mb-3 text-center">Login to your account</h2>

      <Form method="post" autoComplete="off" noValidate>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="your@email.com"
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Password</label>
          <div className="input-group input-group-flat">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Your password"
              autoComplete="off"
              required
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
        <div className="mb-2">
          <label className="form-check">
            <input type="checkbox" className="form-check-input" />
            <span className="form-check-label">Remember me on this device</span>
          </label>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-primary w-100">
            Sign in
          </button>
        </div>
      </Form>

      <div className="text-muted mt-3 text-center">
        Don't have account yet? <Link to="../register">Register</Link>
      </div>
    </div>
  );
}
