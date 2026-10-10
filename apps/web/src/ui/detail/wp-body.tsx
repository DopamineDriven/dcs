/** Renders a WordPress page body with the detail article's typography. */
export function WpBody({ html }: { html: string }) {
  return (
    <div
      className="[&_p]:text-muted-foreground smaller:[&_p]:text-[1.0625rem] [&_h2]:smaller:text-[1.75rem] [&_h3]:text-primary [&_ul]:text-muted-foreground [&_ol]:text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_audio]:mt-6 [&_audio]:w-full [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-[1.5625rem] [&_h2]:font-medium [&_h2]:tracking-[-0.035em] [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[1.3125rem] [&_h3]:leading-normal [&_h3]:font-medium [&_h3]:tracking-tight [&_img]:mt-6 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-md li:mt-2 li:text-[0.9375rem] li:leading-[1.8] [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:text-[0.9375rem] [&_p]:leading-[1.8] [&_p+p]:mt-5.5 [&_strong]:font-semibold [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
