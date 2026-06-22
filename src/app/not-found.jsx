import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-xl">
        {/* Medical / Error Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-sky-600 mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-10 h-10"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m11.25 11.25.041-.02a.75.75 0 1 1 1.063 1.06l-.041.02a.75.75 0 0 1-1.064-1.06Zm-1.815 3.013a.75.75 0 1 1 1.06 1.061l-.696.697a.75.75 0 1 1-1.06-1.06l.696-.698Zm4.629-3.013a.75.75 0 1 1 1.061 1.06l-.697.697a.75.75 0 1 1-1.06-1.06l.696-.697ZM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 18a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5Z" 
            />
          </svg>
        </div>

        {/* Status Code */}
        <p className="text-base font-semibold text-sky-600">404 Error</p>
        
        {/* Heading */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
          Page Not Diagnosed
        </h1>
        
        {/* Medical-Themed Description */}
        <p className="mt-6 text-base leading-7 text-slate-600">
          Sorry, we couldn’t find the page or medical record you’re looking for. It might have been moved, updated, or the link may be temporarily broken.
        </p>

        {/* Buttons (Matching your exact UI layout) */}
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            href="/"
            className="rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0070f3] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-[#0f172a] hover:bg-slate-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}