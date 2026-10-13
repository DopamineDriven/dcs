"use client";

import type { ComponentPropsWithRef } from "react";
import { useToast } from "@/toast/context";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";
import type { Rm } from "@/types/cookies";
import { contactUsActions } from "@/app/actions";
import { useCookiesCtx } from "@/context/cookie-context";
import { toLatLng } from "@/lib/latlng";
import { cn } from "@/lib/utils";

const initialValues = {
  "first-name": "",
  "last-name": "",
  email: "",
  subject: "",
  body: ""
};
const fields = [
  {
    name: "first-name",
    label: "First name",
    type: "text",
    autoComplete: "given-name",
    required: true,
    maxLength: 100
  },
  {
    name: "last-name",
    label: "Last name",
    type: "text",
    autoComplete: "family-name",
    required: true,
    maxLength: 100
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
    maxLength: 254
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    autoComplete: "off",
    required: false,
    maxLength: 200
  }
] satisfies {
  name: keyof typeof initialValues;
  label: string;
  type: string;
  autoComplete: string;
  required: boolean;
  maxLength: number;
}[];

const inputStyles =
  "block w-full rounded-md border-0 bg-background px-3.5 py-2.5 text-base text-foreground shadow-sm ring-1 ring-border ring-inset placeholder:text-muted-foreground focus:ring-2 focus:ring-dcs-800 focus:ring-inset disabled:opacity-60 sm:text-sm/6";

export function SendButton({
  className,
  ...props
}: Rm<ComponentPropsWithRef<"button">, "type" | "disabled">) {
  const { pending } = useFormStatus();
  return (
    <div className="mt-10">
      <button
        {...props}
        disabled={pending}
        className={cn(
          "bg-dcs-800 hover:bg-dcs-700 focus-visible:outline-dcs-600 text-primary-foreground block w-full rounded-md px-3.5 py-3 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-offset-2 disabled:cursor-wait disabled:opacity-60",
          className
        )}
        type="submit">
        {pending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

export function ContactForm() {
  const path = usePathname();
  const isCareerInquiry = path === "/about-us/our-careers";
  const Heading = isCareerInquiry ? "h2" : "h1";
  const [values, setValues] = useState(initialValues);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { getTargeted } = useCookiesCtx();
  const { toast } = useToast();
  const {
    ua,
    ip,
    tz,
    city,
    country,
    locale,
    region,
    postalCode,
    viewport,
    browserName,
    browserVersion,
    qr_access,
    latlng
  } = getTargeted([
    "ua",
    "ip",
    "tz",
    "city",
    "country",
    "locale",
    "region",
    "postalCode",
    "viewport",
    "browserName",
    "browserVersion",
    "qr_access",
    "latlng"
  ]);
  async function fAction(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { lat, lng } = toLatLng(latlng);
    formData.append("user-agent", ua);
    formData.append("ip", ip);
    formData.append("tz", tz);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("locale", locale);
    formData.append("region", region);
    formData.append("postalCode", postalCode);
    formData.append("deviceType", viewport);
    formData.append("browserName", browserName);
    formData.append("browserVersion", browserVersion);
    formData.append("qrAccess", qr_access);
    formData.append("lat", lat);
    formData.append("lng", lng);
    const x = formData.get("first-name");
    console.log(x);
    const successDescription =
      typeof x === "string"
        ? `We'll get back to you soon, ${x}!`
        : "We'll get back to you soon!";
    const response = await contactUsActions(formData);
    if (!response.ok) {
      console.error(response.message);
      toast.error("Something went wrong", {
        description: "Your submission didn't go through. Please try again."
      });
    }
    // Controlled values survive React's automatic form reset after a failed action.
    if (response.ok) {
      toast.success("Submission success",{
        description: successDescription
      });
      formRef.current?.reset();
      setValues({"first-name": "","last-name": "",body: "",email: "",subject: ""});
    }
  }
  return (
    <section
      aria-labelledby={`heading`}
      className="bg-background text-foreground relative isolate px-6 py-8 font-sans sm:py-16 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className="from-dcs-400 to-dcs-800 relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <Heading
          className="text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          id={`heading`}>
          {isCareerInquiry
            ? "Inquire to learn more about Career Opportunities"
            : "Send us an Email"}
        </Heading>
      </div>
      <form
        ref={formRef}
        onSubmit={fAction}
        className="mx-auto mt-16 max-w-xl sm:mt-20">
        <fieldset className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <legend className="sr-only">Your contact details and message</legend>
          {fields.map(({ name, label, ...input }) => (
            <div
              key={name}
              className={cn(
                "flex flex-col gap-2.5",
                (name === "email" || name === "subject") && "sm:col-span-2"
              )}>
              <label
                htmlFor={name}
                className="text-foreground text-sm/6 font-semibold">
                {label}
              </label>
              <input
                required={input.required}
                maxLength={input.maxLength}
                type={input.type}
                autoComplete={input.autoComplete}
                id={name}
                name={name}
                className={inputStyles}
                value={values[name]}
                onChange={event =>
                  setValues(current => ({
                    ...current,
                    [name]: event.target.value
                  }))
                }
              />
            </div>
          ))}
          <div className="flex flex-col gap-2.5 sm:col-span-2">
            <label
              htmlFor={"body"}
              className="text-foreground text-sm/6 font-semibold">
              Message
            </label>
            <textarea
              id={`body`}
              name="body"
              rows={4}
              required
              maxLength={10000}
              className={inputStyles}
              value={values.body}
              onChange={event =>
                setValues(current => ({ ...current, body: event.target.value }))
              }
            />
          </div>
        </fieldset>
        <SendButton />
      </form>
    </section>
  );
}
