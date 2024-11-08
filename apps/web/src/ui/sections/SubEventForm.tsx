"use client";

import Image from "next/image";
import { shimmer } from "@/lib/shimmer";
import css from "../dynamic/children-scaffold.module.css";

export const data = [
  {
    image: {
      url: "https://www.dcs-headless.com/wp-content/uploads/2024/10/our-world.webp",
      width: 640,
      height: 427
    },
    content: `We’ve got you covered. Whether you need onsite services or would prefer the remote delivery model that we have been using for the last 15 years, we always ensure full uninterrupted continuity for our customers. Out of the gate, we have used standard video conferencing platforms, secure VPN networking infrastructure, and cloud-based services to provide seamless continuity to our entire customer base. We have been able to leverage all of our technologies for mobile WFM utilization. Our implementation model is platform independent and easily adapts to technology changes. Simply stated, we recognize the challenges and we have the tools and methodologies to meet those challenges together.`,
    title: "Our World"
  },
  {
    image: {
      url: "https://www.dcs-headless.com/wp-content/uploads/2024/10/our-organization.webp",
      width: 1000,
      height: 667
    },
    content: `Drisdell Consulting Services, Inc. provides expert professional services for all areas of Human Capital and Workforce Management IT system implementation and support. Since 1995, we have provided quality services and custom application development solutions to our customers. As hard as it is to accomplish in this day and age, we have realized a 100% on time, on budget project completion record on all of our client projects. We successfully manage projects, implement systems, and solve business problems-just ask any of our clients!`,
    title: "Our Organization"
  },
  {
    image: {
      url: "https://www.dcs-headless.com/wp-content/uploads/2024/11/our_mission_1_1x.webp",
      width: 1280,
      height: 854
    },
    content: `Our consultants are experienced Human Capital (HCM) and Workforce Management (WFM) Solution Builders who excel in meeting complex deliverables. When we say experienced, we mean over 25 years of experience in HCM / WFM alone. If your HCM / WFM project has yet to leave the launch pad, come off the rails or ultimately failed to deliver your Business and Functional Requirements, we will make that happen. When your requirements are complex, that's our comfort zone. Drisdell Consulting Services, Inc. Consultants average over 10 years experience in the trenches for our customers. We carve a path to HCM success unparalleled by any other organization including the vendors. Please don't hesitate to let us know how we can help!
`,
    title: "Our Mission"
  }
];

export function SubEventForm() {
  return (
    <div className='bg-white py-8 sm:py-12'>
      <div className='mx-auto max-w-7xl auto-rows-fr grid cols-1 gap-6 px-6 lg:px-8 divide-y-2 divide-dcs-800'>
          {data.map((v, i) => (
            <div
              key={v.title}
              className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
              {i === 1 ? (
                <>
                  <div className={'lg:pr-4 lg:order-last'}>
                    <div className='relative overflow-hidden rounded-3xl bg-dcs-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10'>
                      <Image
                        alt={v.image.url}
                        src={v.image.url}
                        width={v.image.width}
                        height={v.image.height}
                        placeholder='blur'
                        blurDataURL={shimmer({
                          w: v.image.width,
                          h: v.image.height
                        })}
                        className='absolute inset-0 h-full w-full object-cover'
                      />
                      <div className='absolute inset-0 mix-blend-multiply' />
                      <div
                        aria-hidden='true'
                        className='absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl'>
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                          }}
                          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-dcs-600 to-dcs-800 opacity-40'
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='text-base/7 text-gray-700 lg:max-w-lg lg:order-first'>
                      <h2 className='mt-2 text-pretty font-basis-grotesque-pro-medium text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                        {v.title}
                      </h2>
                      <div className={css.inner_wp_content}>
                        <p>{v.content}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='lg:pr-4'>
                    <div className='relative overflow-hidden rounded-3xl bg-dcs-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10'>
                      <Image
                        alt={v.image.url}
                        src={v.image.url}
                        width={v.image.width}
                        height={v.image.height}
                        placeholder='blur'
                        blurDataURL={shimmer({
                          w: v.image.width,
                          h: v.image.height
                        })}
                        className='absolute inset-0 h-full w-full object-cover'
                      />
                      <div className='absolute inset-0 mix-blend-multiply' />
                      <div
                        aria-hidden='true'
                        className='absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl'>
                        <div
                          style={{
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                          }}
                          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-dcs-600 to-dcs-800 opacity-40'
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='text-base/7 text-gray-700 lg:max-w-lg'>
                      <h2 className='mt-2 text-pretty font-basis-grotesque-pro-medium text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                        {v.title}
                      </h2>
                      <div className={css.inner_wp_content}>
                        <p>{v.content}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
