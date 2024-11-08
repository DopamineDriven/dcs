import type { Metadata } from "next";
import { SubmitResume } from "@/ui/sections/SubmitResumeForm";

export const metadata = {
  title: "Submit a Resume"
} satisfies Metadata;

export default function SubmitAResumePage() {
  return (
    <>
      <div className='relative'>
        <SubmitResume />
      </div>
    </>
  );
}
