import { ChevronDown } from "@dcs/ui";

export function ConsultantsTranscript() {
  return (
    <details className="group/transcript bg-card text-card-foreground mb-9 rounded-md border font-sans">
      <summary className="text-primary cursor-pointer list-none px-5 py-4 text-sm/normal font-medium [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-4">
          Read the introduction transcript
          <ChevronDown
            className="size-4 shrink-0 group-open/transcript:rotate-180"
            aria-hidden="true"
          />
        </span>
      </summary>
      <div className="px-5 pb-6">
        <div className="text-muted-foreground flex flex-col gap-5 text-base leading-relaxed">
          <p>
            <strong className="text-foreground font-medium">
              Core Competency:
            </strong>{" "}
            attracting and securing elite IT employee consultants who have
            remained devoted to Drisdell Consulting Services for over ten years
            on average.
          </p>
          <p>
            Provide sales and services including: project management and
            implementation services to over one-hundred clients; implementation
            of systems utilizing multiple web-based technologies such as Java,
            XML, WebLogic, Apache, C, and JBoss and database technologies such
            as SQL, DB2, and Oracle; successful implementations utilizing IT
            contingency resources across multiple companies including
            manufacturing, healthcare, retail, and service industries;
            implementation of refined momentum project methodology across many
            global organizations.
          </p>
          <p>
            Competency includes Project Management, programming, implementation
            support and certification for the following: Kronos Workforce
            Central Suite v4.x, v5.0, v5.2, v6.0, v6.3, and v7.x. Timekeeper
            Integration, Connect, custom interface development activities,
            advanced labor tracking and management analytics, business process
            labor metrics analysis management, absence manager, attendance
            policies and leave management, accruals, benefit time tracking and
            management, advanced scheduler, employee schedule management, device
            manager, DCM clock management and data collection, record manager,
            SDM, Data archiving and life cycle configuration management,
            workforce central API, real-time data import/export utilizing XML
            and SOAP messaging.
          </p>
          <ul className="li:py-1 marker:text-primary list-disc pl-5">
            <li>
              Cloud SaaS-based implementation services. Network and Hardware
              sizing, acquisition and Installation services.
            </li>
            <li>Web development Intranet and Internet.</li>
            <li>Hardware upgrade and installation services.</li>
            <li>
              GUI and CGI script development C, C++, Java, RPG, Visual Basic and
              XML.
            </li>
            <li>Database Management DB2, SQL, and Oracle.</li>
          </ul>
        </div>
      </div>
    </details>
  );
}
