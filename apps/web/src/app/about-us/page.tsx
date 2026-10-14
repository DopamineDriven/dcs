import { AboutUsTranscript } from "@/ui/transcript/about-us";
import { generateWordPressMetadata, WordPressPage } from "@/ui/wp/page";

export const dynamicParams = true;

export const revalidate = 120;

export function generateMetadata() {
  return generateWordPressMetadata("/about-us");
}

export default function AboutUsPage() {
  return (
    <WordPressPage path="/about-us">
      <AboutUsTranscript />
    </WordPressPage>
  );
}
