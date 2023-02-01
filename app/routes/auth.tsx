import { Outlet, useMatches } from '@remix-run/react';
import { Logo } from '~/components/logo';

export default function AuthPage() {
  let matches = useMatches();
  let match = matches.find((match) => {
    return match.handle?.picturePath;
  });
  let picturePath = match?.handle?.picturePath as string;

  return (
    <div className=" d-flex flex-column bg-white">
      <div className="row g-0 flex-fill">
        <div className="col-12 col-lg-6 col-xl-4 border-top-wide border-primary d-flex flex-column justify-content-center">
          <div className="container container-tight my-5 px-lg-5">
            <div className="text-center mb-4">
              <a href="/" className="navbar-brand navbar-brand-autodark">
                <Logo />
                Data4One
              </a>
            </div>
            <Outlet />
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
          <div
            className="bg-cover h-100 min-vh-100"
            style={{
              backgroundImage: `url(${picturePath})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
