"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import type { TsxExclude } from "@/types/helpers";
import { contactUsAction } from "@/app/actions";
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
          "bg-dcs-800 hover:bg-dcs-700 focus-visible:outline-dcs-600 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          className
        )}
        type='submit'>
        {pending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

export function ContactForm({
  ip,
  userAgent
}: {
  ip: string;
  userAgent: string;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);

  async function formAction(formData: FormData) {
    try {
      await contactUsAction(formData);
      formRef.current?.reset();
    } catch (err) {
      console.error(
        typeof err === "string" ? err : JSON.stringify(err, null, 2)
      );
    }
  }
  return (
    <div className='isolate bg-white px-6 py-8 sm:py-16 lg:px-8 font-basis-grotesque-pro-medium'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl'>
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className='from-dcs-400 to-dcs-800 relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
        />
      </div>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl' id="send-us-an-email">
          Send us an Email
        </h2>
      </div>
      <form
        action={formAction}
        ref={formRef}
        className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <input type='hidden' name='ip' id='ip' value={ip} />
        <input
          type='hidden'
          name='user-agent'
          id='user-agent'
          value={userAgent}
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
              htmlFor='subject'
              className='block text-sm/6 font-semibold text-gray-900'>
              Subject
            </label>
            <div className='mt-2.5'>
              <input
                id='subject'
                name='subject'
                type='text'
                defaultValue={""}
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
        </div>
        <SendButton />
      </form>
    </div>
  );
}
