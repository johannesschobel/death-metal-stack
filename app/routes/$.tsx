import { Link } from '@remix-run/react';
import { IconArrowBack } from '@tabler/icons-react';

export default function CatchAllPage() {
  return (
    <div className=" border-top-wide border-primary d-flex flex-column">
      <script src="./dist/js/demo-theme.min.js?1668288743"></script>
      <div className="page page-center">
        <div className="container-tight py-4">
          <div className="empty">
            <div className="empty-header">404</div>
            <p className="empty-title">
              Oops... The page you are looking for does not exist.
            </p>
            <p className="empty-subtitle text-muted">Sorry about that.</p>
            <div className="empty-action">
              <Link to="/" className="btn btn-primary">
                <IconArrowBack />
                Take me home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
