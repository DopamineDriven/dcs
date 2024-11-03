"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AvatarFive } from "@/ui/vectors/AvatarFive";
import { AvatarFour } from "@/ui/vectors/AvatarFour";
import { AvatarOne } from "@/ui/vectors/AvatarOne";
import { AvatarThree } from "@/ui/vectors/AvatarThree";
import { AvatarTwo } from "@/ui/vectors/AvatarTwo";
import { EllipseFive } from "@/ui/vectors/EllipseFive";
import { EllipseFour } from "@/ui/vectors/EllipseFour";
import { EllipseOne } from "@/ui/vectors/EllipseOne";
import { EllipseThree } from "@/ui/vectors/EllipseThree";
import { EllipseTwo } from "@/ui/vectors/EllipseTwo";

export function SubHero({ px }: { px?: string }) {
  return (
    <section className={cn("bg-[#234670] mb-4 max-w-9xl", px ? px : "")}>
      <div className='mx-auto max-w-9xl overflow-hidden pt-[2.5rem] lg:pr-0 lg:pt-0'>
        <div className='mx-auto justify-between gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
          <div className='w-full px-6 sm:max-w-3xl lg:shrink-0 lg:pl-20'>
            <h1 className='font-basis-grotesque-pro-medium pt-5 text-[2rem] leading-tight tracking-tight text-white lg:pt-0 lg:text-[2.375rem] lg:leading-normal'>
              {`Start Your Employee Journey Today`}
            </h1>
            <p className='font-basis-grotesque-pro-regular relative mt-3 text-[1rem] leading-[1.5rem] text-white sm:max-w-md lg:mt-6 lg:max-w-xl'>
              {`Explore resources such as timesheets, device policies, paystubs, employee programs, and more.`}
            </p>
            <div className='mt-[1.04rem] flex items-center gap-x-6 lg:mt-[2.13rem]'>
              <Link
                href='/consultants'
                id='consultants'
                className='font-basis-grotesque-pro-medium mx-auto flex w-full justify-center rounded-md bg-flirt-800 px-5 py-3 text-[1rem] tracking-[-0.01125rem] text-white shadow-sm hover:bg-flirt-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flirt-800 lg:mx-0 lg:w-fit lg:flex-none lg:justify-start'>
                {"Explore Employee Resources"}
              </Link>
            </div>
          </div>
          <div
            className='hidden lg:mt-0 lg:flex lg:justify-start lg:pl-0 lg:pt-0'
            role='presentation'
            aria-hidden='true'>
            <div className='lg:order-none lg:ml-0 lg:w-44 lg:flex-none lg:space-y-8 lg:pt-10'>
              <div className='lg:relative lg:left-10'>
                <Image
                  src='/avatars/Avatar-3.png'
                  alt='Avatar One'
                  style={{ objectFit: "cover" }}
                  height={256}
                  width={256}
                  quality={100}
                  loading='eager'
                  fetchPriority='auto'
                  className='absolute -inset-x-[2.375rem] -inset-y-10 aspect-auto scale-[0.7] rounded-full bg-white object-cover ring-8 ring-white [--tw-rotate:14deg]'
                />
                <div className='lg:pointer-events-none lg:absolute lg:inset-0 lg:rounded-full' />
              </div>
              <div className='lg:relative lg:right-10 lg:top-60 lg:z-10 lg:mt-36'>
                <AvatarThree aria-hidden='true' className='lg:scale-[1.3]' />
                <Image
                  src='/avatars/Avatar-1.png'
                  alt='Avatar One'
                  style={{ objectFit: "cover" }}
                  height={256}
                  width={256}
                  quality={100}
                  loading='eager'
                  fetchPriority='auto'
                  className='absolute -inset-x-1 -inset-y-2 aspect-auto scale-[1.15] rounded-b-full rounded-t-2xl object-cover [--tw-rotate:-14deg]'
                />
                <div className='lg:pointer-events-none lg:absolute lg:inset-0 lg:rounded-full' />
              </div>
            </div>
            <div className='lg:mr-0 lg:w-44 lg:flex-none lg:space-y-8 lg:pl-4 lg:pt-44'>
              <div className='relative'>
                <AvatarTwo aria-hidden='true' className='lg:scale-[1.35]' />
                <Image
                  src='/avatars/Avatar-6.png'
                  alt='Avatar One'
                  style={{ objectFit: "cover" }}
                  height={256}
                  width={256}
                  quality={100}
                  loading='eager'
                  fetchPriority='auto'
                  className='absolute -inset-x-1 inset-y-0 aspect-auto scale-[1.15] rounded-b-full rounded-t-2xl object-cover [--tw-rotate:0deg]'
                />
                <div className='lg:pointer-events-none lg:absolute lg:inset-0 lg:rounded-full' />
              </div>
            </div>
            <div className='lg:w-44 lg:flex-none lg:space-y-12 lg:pt-0'>
              <div className='lg:relative lg:right-8 lg:top-[1.3rem]'>
                <AvatarOne aria-hidden='true' className='lg:scale-[1.3]' />
                <Image
                  src='/avatars/Avatar-8.png'
                  alt='Avatar One'
                  style={{ objectFit: "cover" }}
                  height={256}
                  width={256}
                  quality={100}
                  loading='eager'
                  fetchPriority='auto'
                  className='absolute -inset-x-[0.75rem] -inset-y-[2.2rem] aspect-auto rotate-[22deg] rounded-bl-[5.25rem] rounded-br-[4.3rem] object-cover'
                />
                <div className='lg:pointer-events-none lg:absolute lg:inset-0 lg:rounded-full' />
              </div>
              <div className='lg:relative lg:bottom-3 lg:right-3.5 lg:pt-44'>
                <AvatarFour aria-hidden='true' className='lg:scale-[1.2]' />
                <Image
                  src='/avatars/Avatar-5.png'
                  alt='Avatar One'
                  style={{ objectFit: "cover" }}
                  height={256}
                  width={256}
                  quality={100}
                  loading='eager'
                  fetchPriority='auto'
                  className='absolute inset-y-40 aspect-auto scale-[0.8] rounded-t-full object-cover [--tw-rotate:-4deg]'
                />
                <div className='lg:pointer-events-none lg:absolute lg:inset-0 lg:rounded-full' />
              </div>
            </div>
          </div>
          <div
            className='relative grid h-[12.375rem] min-h-[12.375rem] grid-cols-2 lg:hidden'
            role='presentation'
            aria-hidden='true'>
            <div className='isolate mx-auto grid max-h-fit w-[95vw] grid-cols-2'>
              <div className='w-full flex-none'>
                <div>
                  <Image
                    src='/avatars/Avatar-3.png'
                    alt='Avatar Left Mobile'
                    style={{ objectFit: "cover" }}
                    height={123}
                    width={123}
                    quality={100}
                    loading='eager'
                    fetchPriority='auto'
                    className='absolute inset-y-[1.625rem] aspect-auto translate-x-4 rounded-full bg-white object-cover ring-4 ring-white'
                  />
                  <EllipseOne className='absolute inset-y-[7.75rem] translate-x-3' />
                  <EllipseTwo className='absolute inset-y-[9.35rem] translate-x-10' />
                </div>
              </div>
              <div className='w-full flex-none'>
                <div>
                  <AvatarFive
                    aria-hidden='true'
                    className='absolute inset-y-[4.55rem] translate-x-0'
                  />
                  <Image
                    src='/avatars/Avatar-8.png'
                    alt='Avatar Right Mobile'
                    style={{ objectFit: "cover" }}
                    height={256}
                    width={256}
                    quality={100}
                    loading='eager'
                    fetchPriority='auto'
                    className='absolute inset-y-5 aspect-auto scale-[0.55] rounded-t-full object-cover [--tw-translate-x:-2.25rem]'
                  />
                  <EllipseFive className='absolute inset-y-10 translate-x-36' />
                  <EllipseFour className='absolute inset-y-7 translate-x-32' />
                  <EllipseThree className='absolute inset-y-36 -translate-x-[0.95rem]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
