import Image from "next/image";
import Link from "next/link";
import type { GetAboutUsWithChildrenProps } from "@/types/wp";
import { shimmer } from "@/lib/shimmer";

export type Children = GetAboutUsWithChildrenProps["page"]["children"];

export default function Cards<const T extends Children>({ edges }: T) {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
            About Drisdell Consulting Services
          </h2>
          {/* <p className='mt-2 text-lg/8 text-gray-600'>
            Learn how to grow your business with our expert advice.
          </p> */}
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {edges.map(post => (

            <article
              key={post.cursor}
              className='relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
              <Image
                alt={post.node.featuredImage.node.altText}
                src={post.node.featuredImage.node.sourceUrl}
                height={post.node.featuredImage.node.mediaDetails.height}
                width={post.node.featuredImage.node.mediaDetails.width}
                placeholder='blur'
                blurDataURL={shimmer({
                  w: post.node.featuredImage.node.mediaDetails.width,
                  h: post.node.featuredImage.node.mediaDetails.height
                })}
                className='absolute inset-0 -z-10 h-full w-full object-cover group-hover:opacity-75'
                style={{ objectFit: "cover" }}
              />
              <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
              <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
              <h3 className='mt-3 text-lg/6 font-semibold font-basis-grotesque-pro-regular text-white'>
                <Link href={post.node.uri}>
                  <span className='absolute inset-0' />
                  {post.node.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
