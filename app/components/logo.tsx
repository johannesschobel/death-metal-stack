import { Link } from '@remix-run/react';

export function Logo() {
  return (
    <Link to="/" className="block">
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="64"
        height="64"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(238, 205, 163) ' }}
            ></stop>
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(239, 98, 159)' }}
            ></stop>
          </linearGradient>

          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(60, 165, 92)' }}></stop>
            <stop
              offset="100%"
              style={{ stopColor: 'stop-color: rgb(181, 172, 73)' }}
            ></stop>
          </linearGradient>
        </defs>
        <path
          className="blob"
          d="M452,291Q462,332,413,343Q364,354,342,372.5Q320,391,292,396Q264,401,230,420.5Q196,440,174.5,409Q153,378,124,362Q95,346,94,312.5Q93,279,93,250Q93,221,102,192.5Q111,164,109,112.5Q107,61,150,55Q193,49,232,34.5Q271,20,309.5,36.5Q348,53,386,72.5Q424,92,440,131Q456,170,449,210Q442,250,452,291Z"
          fill="none"
          strokeWidth="30px"
          stroke="url(#gradient1)"
        ></path>

        <path
          className="blob"
          d="M311.5,325Q163,400,167,256.5Q171,113,315.5,181.5Q460,250,311.5,325Z"
          fill="none"
          strokeWidth="30px"
          stroke="url(#gradient2)"
        ></path>
      </svg>
    </Link>
  );
}
