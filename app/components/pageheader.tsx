import { IconPlus } from '@tabler/icons-react';

interface Properties {
  preTitle: string;
  title: string;
}

export default function PageHeaderComponent({
  preTitle = '',
  title = 'Overview',
}: Properties) {
  return (
    <div className="page-header d-print-none">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            <div className="page-pretitle">{preTitle}</div>
            <h2 className="page-title">{title}</h2>
          </div>
          <div className="col-auto ms-auto d-print-none">
            <div className="btn-list">
              <span className="d-none d-sm-inline">
                <a href="#" className="btn">
                  New view
                </a>
              </span>
              <a
                href="#"
                className="btn btn-primary d-none d-sm-inline-block"
                data-bs-toggle="modal"
                data-bs-target="#modal-report"
              >
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Create new report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
