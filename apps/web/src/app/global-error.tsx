"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        <details className="detailsopen:p-2 detailsopensummary:mb-2 detailsopensummary:border-b detailsopensummary:border-solid detailsopensummary:border-[#aaa]">
          <summary className="font-basis-grotesque-pro-medium mx-0 -my-2 p-2">
            Details
          </summary>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </details>
      </body>
    </html>
  );
}
