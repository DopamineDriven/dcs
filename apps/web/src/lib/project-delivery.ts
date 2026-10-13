export type DeliveryNode = {
  label: string;
  effort: "drisdell" | "joint";
};

export type DeliveryStage =
  | { kind: "parallel"; nodes: [DeliveryNode, DeliveryNode] }
  | { kind: "step"; node: DeliveryNode; review?: DeliveryNode };

export type DeliveryPath = {
  id: string;
  title: string;
  description: string;
  stages: DeliveryStage[];
};

const workflow = {
  label: "Business Processes Workflow (BPW)",
  effort: "drisdell"
} satisfies DeliveryNode;
const requirements = {
  label: "Functional Requirements Document (FRD)",
  effort: "drisdell"
} satisfies DeliveryNode;
const reviewMatrix = {
  label: "BPW / FRD Review matrix",
  effort: "joint"
} satisfies DeliveryNode;
const configurationAnalysis = {
  label: "Cross Business Configuration Analysis",
  effort: "drisdell"
} satisfies DeliveryNode;
const signOff = {
  label: "Configuration Sign-Off",
  effort: "joint"
} satisfies DeliveryNode;
const survey = {
  label: "Business Requirements Preparatory Survey",
  effort: "joint"
} satisfies DeliveryNode;

export const deliveryPaths = [
  {
    id: "legacy",
    title: "With a legacy HCM solution",
    description: "Requirements and gap analysis inform the workflow.",
    stages: [
      {
        kind: "parallel",
        nodes: [survey, { label: "GAP Analysis Survey", effort: "drisdell" }]
      },
      { kind: "step", node: workflow },
      { kind: "step", node: requirements, review: reviewMatrix },
      {
        kind: "step",
        node: {
          label: "Configuration Baseline Survey / Module Determination",
          effort: "joint"
        }
      },
      { kind: "step", node: configurationAnalysis, review: signOff }
    ]
  },
  {
    id: "non-legacy",
    title: "With a non-legacy HCM solution",
    description: "Requirements are shaped through business engagement.",
    stages: [
      {
        kind: "step",
        node: survey,
        review: { label: "Initial Business Engagement", effort: "joint" }
      },
      { kind: "step", node: workflow },
      { kind: "step", node: requirements, review: reviewMatrix },
      {
        kind: "step",
        node: {
          label: "Configuration Baseline Survey / Product Determination",
          effort: "joint"
        }
      },
      { kind: "step", node: configurationAnalysis, review: signOff }
    ]
  }
] satisfies DeliveryPath[];
