import { useLoaderData } from '@remix-run/react';

export let handle = { pageHeader: { preTitle: 'Studies', title: 'Overview' } };

interface Study {
  id: string;
  title: string;
  picture: string;
}

export async function loader(): Promise<Study[]> {
  return [
    {
      id: 'a',
      title: 'foo',
      picture:
        'https://randomwordgenerator.com/img/picture-generator/57e5d3444356ad14f1dc8460962e33791c3ad6e04e507440762a7cd4934cc4_640.jpg',
    },
    {
      id: 'b',
      title: 'bar',
      picture:
        'https://randomwordgenerator.com/img/picture-generator/54e5d2444253af14f1dc8460962e33791c3ad6e04e50744172287ad1954ec7_640.jpg',
    },
  ];
}

export default function StudiesIndexPage() {
  const studies = useLoaderData<typeof loader>();

  return (
    <div className="row row-cards">
      {studies.map((study) => (
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{study.title}</h3>
              <div className="card-actions btn-actions">
                <a href="#" className="btn-action">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                  </svg>
                </a>
                <a href="#" className="btn-action">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>
                </a>
                <a href="#" className="btn-action">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                  </svg>
                </a>
                <a href="#" className="btn-action">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <img src={study.picture} alt="Logo" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
