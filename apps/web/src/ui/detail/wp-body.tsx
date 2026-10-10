/** Renders a WordPress page body with the detail article's typography. */
export function WpBody({ html }: { html: string }) {
  return (
    <div
      className="p:text-muted-foreground smaller:p:text-[1.0625rem] h2:smaller:text-[1.75rem] h3:text-primary ul:text-muted-foreground ol:text-muted-foreground a:text-primary a:underline-offset-4 a:hover:underline audio:mt-6 audio:w-full h2:mt-8 h2:mb-4 h2:text-[1.5625rem] h2:font-medium h2:tracking-[-0.035em] h3:mt-8 h3:mb-3 h3:text-[1.3125rem] h3:leading-normal h3:font-medium h3:tracking-tight img:mt-6 img:h-auto img:max-w-full img:rounded-md li:mt-2 li:text-[0.9375rem] li:leading-[1.8] ol:mt-4 ol:list-decimal ol:pl-5 p:text-[0.9375rem] p:leading-[1.8] pp:mt-5.5 strong:font-semibold ul:mt-4 ul:list-disc ul:pl-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
