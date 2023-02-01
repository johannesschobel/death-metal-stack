import { Link } from '@remix-run/react';
import Container from '~/components/layout/Container';
import { useOptionalUser } from '~/utils';

export default function Index() {
  const user = useOptionalUser();
  return (
    <Container>
      <main className="relative min-h-screen  sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/hero/directed.jpg"
                  alt="Directed"
                />
                <div className="absolute inset-0 bg-[color:rgba(115, 147, 179)] mix-blend-multiply" />
              </div>
              <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
                  <span className="block uppercase text-blue-500 drop-shadow-md">
                    Directed Stack
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                  Check the README.md file for instructions on how to get this
                  project deployed.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                    >
                      View Notes for {user.user?.email}
                    </Link>
                  ) : (
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        to="/signup"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/signin"
                        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                      >
                        Log In
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              <div className="my-4 font-bold">Powered By:</div>
              {[
                {
                  src: '/logos/directus-logo.svg',
                  alt: 'Directus',
                  href: 'https://directus.io',
                },
                {
                  src: '/logos/remix.svg',
                  alt: 'Remix',
                  href: 'https://remix.run',
                },
                {
                  src: 'https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg',
                  alt: 'Tailwind',
                  href: 'https://tailwindcss.com',
                },
                {
                  src: 'https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg',
                  alt: 'TypeScript',
                  href: 'https://typescriptlang.org',
                },
              ].map((img) => (
                <a
                  key={img.href}
                  href={img.href}
                  className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                >
                  <img alt={img.alt} src={img.src} className="object-contain" />
                </a>
              ))}
            </div>
          </div>
          <section className="text-gray-600 body-font bg-white rounded-md my-6 border-2 border-gray-200">
            <div className="container px-5 py-6 mx-auto flex items-center md:flex-row flex-col">
              <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                <a
                  href="https://github.com/freekrai/directed-stack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    More Info
                  </h2>
                  <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
                    See More On Github
                  </h1>
                </a>
              </div>
              <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                <a
                  href="https://github.com/freekrai/directed-stack"
                  target="_blank"
                  className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">Star</span>
                    <span className="title-font font-medium">this repo</span>
                  </span>
                </a>
                <a
                  href="https://github.com/freekrai/directed-stack/fork"
                  target="_blank"
                  className="bg-blue-300 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1">Fork</span>
                    <span className="title-font font-medium">This repo</span>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Container>
  );
}
