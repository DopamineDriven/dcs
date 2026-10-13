import { ConsultantsTranscript } from "@/ui/transcript/consultants";
import { generateWordPressMetadata, WordPressPage } from "@/ui/wp/page";

export const revalidate = 120;

export function generateMetadata() {
  return generateWordPressMetadata("/consultants");
}

export default function Page() {
  return (
    <WordPressPage path="/consultants">
      <ConsultantsTranscript />
    </WordPressPage>
  );
}
