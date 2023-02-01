import { IconHeart } from '@tabler/icons-react';

export default function FooterComponent() {
  return (
    <footer className="footer footer-transparent d-print-none">
      <div className="container-xl">
        <div className="row align-items-center flex-row text-center">
          <div className="col-12 col-lg-auto mt-lg-0 mt-3">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                <span>
                  Copyright &copy; 2023 - present by Johannes Schobel. All
                  rights reserved. Made with <IconHeart color="pink" /> in Ulm
                </span>
              </li>
              <li className="list-inline-item">v1.0.0</li>
            </ul>
          </div>

          <div className="col-lg-auto ms-lg-auto">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                <a href="#" className="link-secondary">
                  Documentation
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="link-secondary">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
