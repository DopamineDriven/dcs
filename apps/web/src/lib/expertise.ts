export type ExpertiseGroup = {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
};

export const expertiseGroups = [
  {
    id: "workforce",
    title: "Workforce & HCM systems",
    description:
      "The applications your people rely on, and the expertise to support them.",
    items: [
      "HCM Applications",
      "Implementation & Support",
      "Configuration Services",
      "System Administration",
      "System Monitoring",
      "Training Modeling & Delivery"
    ]
  },
  {
    id: "integrations",
    title: "Integration & process design",
    description:
      "Connect your systems, understand your requirements, and refine how you work.",
    items: [
      "CRM System Integrations",
      "SaaS & Cloud Based Services",
      "Business Process Modeling",
      "Process Design & Refinement",
      "Requirements Elicitation",
      "Data Mining & Analytics"
    ]
  },
  {
    id: "project-management",
    title: "Business & project delivery",
    description:
      "Keep your people, priorities, and resources moving toward the same goal.",
    items: [
      "Enterprise C-Level Relations",
      "Project Management",
      "Change Control",
      "Vendor Management",
      "Budget Creation / Tracking",
      "P & L / Cost Benefit Analysis",
      "Goal Acquisition"
    ]
  }
] as const satisfies readonly ExpertiseGroup[];
