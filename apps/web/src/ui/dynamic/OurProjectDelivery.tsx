import Image from "next/image";
import { shimmer } from "@/lib/shimmer";

export function OurProjectDelivery() {
  return (
    <div className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
    <div className='mx-auto my-2 text-base/7 text-gray-700 lg:col-span-2'>
      <h1 className='text-pretty font-basis-grotesque-pro-medium text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
        {"Our Project Delivery"}
      </h1>
    </div>
    <div className='mx-auto my-2 lg:col-span-2'>
      <Image
        className='my-2 rounded-3xl object-cover'
        alt='dcs project delivery'
        src='https://www.dcs-headless.com/wp-content/uploads/2024/11/dcs_project_delivery_1.webp'
        width='1280'
        height='1025'
        blurDataURL={shimmer({ w: 1280, h: 1025 })}
        placeholder='blur'
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>
  )
}
