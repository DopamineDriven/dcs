"use client";

import type { ComponentPropsWithRef } from "react";
import { useToast } from "@/toast/context";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import type { Rm } from "@/types/cookies";
import type { SubmissionResult } from "@/utils/submission-result";
import { eventSubmissionAction } from "@/app/actions";
import { useCookiesCtx } from "@/context/cookie-context";
import { toLatLng } from "@/lib/latlng";
import { cn } from "@/lib/utils";
import { submissionFailure } from "@/utils/submission-result";

const initialValues = {
  "first-name": "",
  "last-name": "",
  email: "",
  "phone-number": "",
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
    name: "phone-number",
    label: "Phone number (optional)",
    type: "tel",
    autoComplete: "tel",
    required: false,
    maxLength: 50
  }
] as const satisfies {
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

export function EventForm() {
  const [values, setValues] = useState(initialValues);
  const { getTargeted } = useCookiesCtx();
  const { toast } = useToast();
  const [_result, formAction, pending] = useActionState(
    async (_previous: SubmissionResult | undefined, formData: FormData) => {
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

      const { lat, lng } = toLatLng(latlng);
      formData.set("user-agent", ua);
      formData.set("ip", ip);
      formData.set("tz", tz);
      formData.set("city", city);
      formData.set("country", country);
      formData.set("locale", locale);
      formData.set("region", region);
      formData.set("postalCode", postalCode);
      formData.set("deviceType", viewport);
      formData.set("browserName", browserName);
      formData.set("browserVersion", browserVersion);
      formData.set("qrAccess", qr_access);
      formData.set("lat", lat);
      formData.set("lng", lng);
      const x = formData.get("first-name");
      const successDescription =
        typeof x === "string"
          ? `We'll get back to you soon, ${x}!`
          : "We'll get back to you soon!";
      const response =
        await eventSubmissionAction(formData).catch(submissionFailure);
      if (!response.ok) {
        console.error(response.message);
        toast.error("Something went wrong", {
          description: "Your submission didn't go through. Please try again."
        });
        return;
      }
      // Controlled values survive React's automatic form reset after a failed action.
      if (response.ok) {
        setValues(initialValues);

        toast.success("Submission success", {
          description: successDescription
        });
      }
      return response;
    },
    undefined
  );

  return (
    <section
      aria-labelledby={`heading`}
      className="bg-background text-foreground relative isolate px-6 py-8 font-sans sm:py-12 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className="from-dcs-400 to-dcs-800 relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-foreground text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          id={`heading`}>
          Get in Touch
        </h2>
      </div>
      <form
        action={formAction}
        aria-busy={pending}
        className="mx-auto mt-8 max-w-xl sm:mt-10">
        <fieldset
          disabled={pending}
          className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <legend className="sr-only">Your contact details and message</legend>
          {fields.map(({ name, label, ...input }) => (
            <div
              key={name}
              className={cn(
                "flex flex-col gap-2.5",
                (name === "email" || name === "phone-number") && "sm:col-span-2"
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
              htmlFor={`body`}
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
