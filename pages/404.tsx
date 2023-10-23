import Link from "next/link";

export default function PageNotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-4xl font-extrabold text-vitalize-primary">404</p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="mt-6 text-lg leading-7 text-gray-600">
          We searched high and low, but couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-vitalize-primary px-5 py-3 text-lg font-semibold text-white shadow-lg hover:bg-vitalize-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vitalize-primary"
          >
            Take Me Home
          </Link>
          <Link
            href="mailto:support@vitalizecare.co"
            className="text-lg font-semibold text-gray-900 flex items-center"
          >
            Contact Support{" "}
            <span aria-hidden="true" className="text-vitalize-primary text-2xl ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
