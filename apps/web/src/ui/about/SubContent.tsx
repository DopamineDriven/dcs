"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { PageByUriProps } from "@/types/wp";
import { shimmer } from "@/lib/shimmer";
import { SubmitResume } from "@/ui/sections/SubmitResumeForm";
import { ChildrenScaffold } from "../dynamic/ChildrenScaffold";

export type SubContentProps = { pathname: string } & PageByUriProps;

export function ConditionalContentLayout({ pathname, page }: SubContentProps) {
  switch (pathname) {
    case "/about-us/our-project-delivery": {
      return (
        <Image
          className='my-2 rounded-3xl'
          alt='dcs project delivery'
          src='/infographics/DCS_Project_Delivery.png'
          width='2312'
          height='1707'
          blurDataURL={shimmer({ w: 2312, h: 1707 })}
          placeholder='blur'
        />
      );
    }
    case "/consultants/submit-a-resume": {
      return (
        <div className='relative'>
          <SubmitResume />
        </div>
      );
    }
    default: {
      return <ChildrenScaffold page={page} />;
    }
  }
}

export default function SubContent({ page }: PageByUriProps) {
  const pathname = usePathname();
  return (
    <div className='bg-white py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <ConditionalContentLayout pathname={pathname} page={page} />
      </div>
    </div>
  );
}
