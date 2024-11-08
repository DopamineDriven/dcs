import { cn } from "@/lib/utils";
import { toHex } from "@/utils/to-hex";

export const services = [
  {
    service: "CRM System Integrations"
  },
  {
    service: "Enterprise C-Level Relations"
  },
  {
    service: "Implementation & Support"
  },
  {
    service: "SaaS & Cloud Based Services"
  },
  {
    service: "Configuration Services"
  },
  {
    service: "Change Control"
  },
  {
    service: "Project Management"
  },
  {
    service: "Training Modeling & Delivery"
  },
  {
    service: "System Monitoring"
  },
  {
    service: "Business Process Modeling"
  },
  {
    service: "HCM Applications"
  },
  {
    service: "Budget Creation / Tracking"
  },
  {
    service: "Vendor Management"
  },
  {
    service: "Process Design & Refinement"
  },
  {
    service: "P & L / Cost Benefit Analysis"
  },
  {
    service: "Goal Acquisition"
  },
  {
    service: "Data Mining & Analytics"
  },
  {
    service: "Requirements Elicitation"
  },
  {
    service: "System Administration"
  }
];

export function OurExpertise() {
  return (
    <div className='mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
      <div className='mx-auto mt-2 text-base/7 text-gray-700 lg:col-span-2'>
        <h1 className='text-pretty font-basis-grotesque-pro-medium text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
          {"Our Expertise"}
        </h1>
      </div>
      <div className='col-span-2'>
        <dl className='mt-2 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((item, i) => (
            <div
              key={toHex(item.service)}
              className={cn(
                "overflow-hidden bg-dcs-50 px-4 py-5 shadow-magical sm:p-6",
                ++i === services.length ? "sm:col-span-2 lg:col-span-3" : ""
              )}>
              <dt className='text-center font-basis-grotesque-pro-medium text-xl tracking-tight text-gray-900'>
                {item.service}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
