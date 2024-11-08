"use client";

import Image from "next/image";
import type { PageByUriProps } from "@/types/wp";
import { shimmer } from "@/lib/shimmer";
import { SubmitResume } from "@/ui/sections/SubmitResumeForm";
import { ChildrenScaffold } from "../dynamic/ChildrenScaffold";

export type SubContentSwitchProps = { pathname: string } & PageByUriProps;

export function SubContentSwitch({ pathname, page }: SubContentSwitchProps) {
  switch (pathname) {
    case "/about-us/our-project-delivery": {
      return (
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='my-2 mx-auto text-base/7 text-gray-700 lg:col-span-2'>
            <h1 className='text-pretty font-basis-grotesque-pro-medium text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
              {page.title}
            </h1>
          </div>
          <div className='mx-auto my-2 lg:col-span-2'>
            <Image
              className='my-2 rounded-3xl object-cover'
              alt='dcs project delivery'
              src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y7u16hd3wssgmrrwa1jq.png'
              width='2132'
              height='1707'
              blurDataURL={shimmer({ w: 2132, h: 1707 })}
              placeholder='blur'
              style={{objectFit: "cover"}}
              loading="eager"
            />
          </div>
        </div>
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
