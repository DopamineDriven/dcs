"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import type { TsxExclude } from "@/types/helpers";
import { resumeSubmissionAction } from "@/app/actions";
import { UseGetMeta } from "@/hooks/use-meta";
import { cn } from "@/lib/utils";

export function SendButton({
  className,
  ...props
}: TsxExclude<"button", "disabled" | "type">) {
  const { pending } = useFormStatus();
  return (
    <div className='mt-10'>
      <button
        {...props}
        disabled={pending}
        className={cn(
          "block w-full rounded-md bg-dcs-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-dcs-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dcs-600",
          className
        )}
        type='submit'>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}

export function SubmitResume() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { ua: userAgent, ip, city, flag, lat, lng, tz } = UseGetMeta();

  async function formAction(formData: FormData) {
    try {
      await resumeSubmissionAction(formData);
      formRef.current?.reset();
    } catch (err) {
      console.error(
        typeof err === "string" ? err : JSON.stringify(err, null, 2)
      );
    }
  }

  return (
    <div className='isolate bg-white px-6 py-8 font-basis-grotesque-pro-medium sm:py-16 lg:px-8'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl'>
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-dcs-400 to-dcs-800 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
        />
      </div>
      <div className='mx-auto max-w-2xl text-center'>
        <h2
          className='text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'
          id='send-us-an-email'>
          Submit a Resume
        </h2>
      </div>
      <form
        action={formAction}
        ref={formRef}
        className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <input
          className='hidden'
          aria-hidden='true'
          type='text'
          name='ip'
          id='ip'
          defaultValue={ip}
          value={ip}
        />
        <input
          className='hidden'
          aria-hidden='true'
          type='text'
          name='city'
          id='city'
          defaultValue={city}
          value={city}
        />
        <input
          className='hidden'
          aria-hidden='true'
          type='text'
          name='lat'
          id='lat'
          value={lat}
          defaultValue={lat}
        />
        <input
          className='hidden'
          aria-hidden='true'
          type='text'
          name='lng'
          id='lng'
          value={lng}
          defaultValue={lng}
        />
        <input
          className='hidden'
          aria-hidden='true'
          type='text'
          name='tz'
          id='tz'
          value={tz}
          defaultValue={tz}
        />
        <input
          className='hidden'
          aria-hidden='true'
          type='text'
          name='flag'
          id='flag'
          value={flag}
          defaultValue={flag}
        />
        <input
          className='hidden'
          aria-hidden='true'
          type='text'
          name='user-agent'
          id='user-agent'
          value={userAgent}
          defaultValue={userAgent}
        />
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm/6 font-semibold text-gray-900'>
              First name
            </label>
            <div className='mt-2.5'>
              <input
                id='first-name'
                name='first-name'
                type='text'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dcs-800 sm:text-sm/6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='last-name'
              className='block text-sm/6 font-semibold text-gray-900'>
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                id='last-name'
                name='last-name'
                type='text'
                autoComplete='family-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dcs-800 sm:text-sm/6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm/6 font-semibold text-gray-900'>
              Email
            </label>
            <div className='mt-2.5'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dcs-800 sm:text-sm/6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='phone-number'
              className='block text-sm/6 font-semibold text-gray-900'>
              Phone Number
            </label>
            <div className='mt-2.5'>
              <input
                id='phone-number'
                name='phone-number'
                type='tel'
                autoComplete='tel'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dcs-800 sm:text-sm/6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='body'
              className='block text-sm/6 font-semibold text-gray-900'>
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                id='body'
                name='body'
                rows={4}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dcs-800 sm:text-sm/6'
                defaultValue={""}
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='file'
              className='block text-sm/6 font-semibold text-gray-900'>
              Upload your Resume or CV
            </label>
            <div className='mt-2.5'>
              <input
                id='file'
                name='file'
                type='file'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dcs-800 sm:text-sm/6'
                accept='application/*'
              />
            </div>
          </div>
        </div>
        <SendButton />
      </form>
    </div>
  );
}