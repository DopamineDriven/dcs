import Image from "next/image";
import type { PageByUriProps } from "@/types/wp";
import { shimmer } from "@/lib/shimmer";
import css from "./children-scaffold.module.css";

export function ChildrenScaffold({ page }: PageByUriProps) {
  return (
    <div className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
      <div className='lg:pr-4'>
        <div className='relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10'>
          <Image
            alt={page.featuredImage.node.altText}
            src={page.featuredImage.node.sourceUrl}
            width={page.featuredImage.node.mediaDetails.width}
            height={page.featuredImage.node.mediaDetails.height}
            placeholder='blur'
            blurDataURL={shimmer({
              w: page.featuredImage.node.mediaDetails.width,
              h: page.featuredImage.node.mediaDetails.height
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
          <h1 className='mt-2 text-pretty text-3xl font-semibold font-basis-grotesque-pro-medium tracking-tight text-gray-900 sm:text-5xl'>
            {page.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: page.content }}
            className={css.inner_wp_content}
          />
        </div>
      </div>
    </div>
  );
}
