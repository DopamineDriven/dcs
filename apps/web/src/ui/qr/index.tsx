import { EventForm } from "@/ui/forms/event";
import { SubEventForm } from "@/ui/qr/sub-event-form";

export function QrPage() {
  return (
    <main
      id="main-content"
      className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      <header className="px-6 pt-8 pb-8 font-sans sm:pt-12 sm:pb-10 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
            Welcome to Drisdell Consulting!
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
            It was a pleasure to meet you and we look forward to the opportunity
            to continue to get to know you better. Please take a moment to let
            us know more about you. We want to help you address your HCM needs
            and goals.
          </p>
        </div>
      </header>
      <EventForm />
      <SubEventForm />
    </main>
  );
}
