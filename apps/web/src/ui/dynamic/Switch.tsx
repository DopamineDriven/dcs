"use client";

import type { PageByUriProps } from "@/types/wp";
import { ChildrenScaffold } from "@/ui/dynamic/ChildrenScaffold";
import { OurExpertise } from "@/ui/dynamic/OurExpertise";
import { SubmitResume } from "@/ui/sections/SubmitResumeForm";
import { ContactForm } from "../sections/ContactForm";
import { OurProjectDelivery } from "./OurProjectDelivery";

export type SubContentSwitchProps = { pathname: string } & PageByUriProps;

export function SubContentSwitch({ pathname, page }: SubContentSwitchProps) {
  switch (pathname) {
    case "/about-us/our-project-delivery": {
      return <OurProjectDelivery />;
    }
    case "/consultants/submit-a-resume": {
      return (
        <div className='relative'>
          <SubmitResume />
        </div>
      );
    }
    case "/about-us/our-expertise": {
      return (
        <div className='relative'>
          <OurExpertise />
        </div>
      );
    }
    case "/about-us/our-careers": {
      return (
        <div className='relative'>
          <ContactForm />
        </div>
      );
    }
    default: {
      return <ChildrenScaffold page={page} />;
    }
  }
}
