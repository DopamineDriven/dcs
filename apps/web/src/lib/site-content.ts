import type { MenuId } from "@/lib/site-navigation";
import { menuLinks, menus } from "@/lib/site-navigation";

export type SiteSection = { id?: string; title?: string; body: string };
export type SitePresentation = "expertise" | "delivery" | "testimonial";
export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type SiteAction = { label: string; href: string };

export type SiteContent = {
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  sections: readonly SiteSection[];
  lead?: string;
  presentation?: SitePresentation;
  image?: SiteImage;
  narration?: string;
  attribution?: string;
  action?: SiteAction;
};

export const sitePages = [
  {
    path: "/about-us",
    title: "Good people. Lasting partnerships.",
    eyebrow: "About Drisdell Consulting Services",
    description:
      "Independent expertise since 1995. A personal commitment to the people behind every project.",
    narration: "/audio/about-us.mp3",
    sections: [
      {
        title: "Built around your business.",
        body: "Since 1995, Drisdell Consulting Services has provided professional services and custom application development solutions for our customers. We manage projects, implement systems, and solve business problems.\n\nOur focus is Human Capital Management and Workforce Management: the systems your people depend on, every day."
      },
      {
        title: "In the company of experts.",
        body: "We bring experienced consultants to the business challenges that need them. From understanding your requirements to implementing and supporting your systems, our work starts with listening—and continues through delivery."
      }
    ]
  },
  {
    path: "/about-us/our-expertise",
    title: "Complex challenges. Clear expertise.",
    eyebrow: "Our expertise",
    description:
      "The technical know-how and business understanding to make your systems work better, together.",
    presentation: "expertise",
    sections: []
  },
  {
    path: "/about-us/our-consultants",
    title: "Experience is our difference.",
    eyebrow: "Our consultants",
    description:
      "Talented, motivated people who take a genuine interest in your industry—and in helping you succeed.",
    image: {
      src: "/images/about-consultants.webp",
      alt: "Snow-covered mountain peaks beneath a soft pink evening sky.",
      width: 640,
      height: 427
    },
    narration: "/audio/about-consultants.mp3",
    sections: [
      {
        body: "Our professional consultants are talented, intelligent, motivated individuals who take a genuine interest in their industry and in helping their clients succeed.\n\nOur consultants have an average of 15 years industry specific experience-providing expert implementations, bringing projects in on time and within budget, analyzing business problems, delivering quality systems support, developing customized solutions for our clients, providing consistent quality deliverables, and maintaining a satisfied customer base.\n\nWe place our consultants based on skills that the customer needs to address specific business challenges. When you choose a DCS consultant, you are “In the company of experts”."
      }
    ]
  },
  {
    path: "/about-us/our-mission",
    title: "Your most complex requirements. Our comfort zone.",
    eyebrow: "Our mission",
    description:
      "Experienced Human Capital and Workforce Management solution builders who excel in meeting complex deliverables.",
    image: {
      src: "/images/about-mission.webp",
      alt: "A ship travelling through a snowy mountain fjord at twilight.",
      width: 1280,
      height: 854
    },
    narration: "/audio/about-mission.mp3",
    lead: "Our consultants are experienced Human Capital (HCM) and Workforce Management (WFM) Solution Builders who excel in meeting complex deliverables.",
    sections: [
      {
        body: "When we say experienced, we mean over 25 years of experience in HCM / WFM alone. If your HCM / WFM project has yet to leave the launch pad, come off the rails or ultimately failed to deliver your Business and Functional Requirements, we will make that happen.\n\nWhen your requirements are complex, that’s our comfort zone. Drisdell Consulting Services, Inc. Consultants average over 10 years experience in the trenches for our customers. We carve a path to HCM success unparalleled by any other organization including the vendors. Please don’t hesitate to let us know how we can help!"
      }
    ]
  },
  {
    path: "/about-us/our-organization",
    title: "Independent by design. Personal by nature.",
    eyebrow: "Our organization",
    description:
      "Professional services for every stage of Human Capital and Workforce Management IT system implementation and support.",
    sections: [
      {
        title: "A commitment that began in 1995.",
        body: "We have provided quality professional services and custom application development solutions since 1995. Our work brings together project management, system implementation, and practical business problem-solving.\n\nWe build the right team around your requirements and stay focused on delivering the work you need."
      }
    ]
  },
  {
    path: "/about-us/our-customers",
    title: "Your business is not one-size-fits-all.",
    eyebrow: "Our customers",
    description:
      "Small, mid-size, or enterprise. We start by understanding what makes your business yours.",
    image: {
      src: "/images/about-customers.webp",
      alt: "A person standing on a rock with arms raised against a vivid sunset.",
      width: 640,
      height: 427
    },
    narration: "/audio/about-customers.mp3",
    sections: [
      {
        body: "Whether you are a small, mid-size or enterprise manufacturer, healthcare organization, retail organization, services provider or state or federal government entity, we have you covered. While we have extensive, real world experience in all of these areas, we assume nothing when we begin to work together with you.\n\nYour business is your business and you are successful because you are not the same as the rest. We will work diligently to understand your business and functional requirements. We will not present a solution until we have been successful in understanding your business. We do not work on a “one size fits all” model.\n\nTogether we will truly do it better. This is the model we have defined, refined and aligned for each of our clients individually since 1995. We look forward to doing the same for you."
      }
    ]
  },
  {
    path: "/about-us/our-project-delivery",
    title: "Two starting points. One clear path.",
    eyebrow: "Our project delivery",
    description:
      "With a legacy or non-legacy HCM solution, your business requirements guide every step toward system configuration in DEV.",
    presentation: "delivery",
    sections: []
  },
  {
    path: "/about-us/our-world",
    title: "Wherever you work, we are with you.",
    eyebrow: "Our world",
    description:
      "Onsite or remote. The same personal attention and continuity for your business.",
    image: {
      src: "/images/about-world.webp",
      alt: "A traveller and an off-road vehicle silhouetted beneath the Milky Way.",
      width: 640,
      height: 427
    },
    narration: "/audio/about-world.mp3",
    sections: [
      {
        body: "We’ve got you covered. Whether you need onsite services or would prefer the remote delivery model that we have been using for the last 15 years, we always ensure full uninterrupted continuity for our customers.\n\nOut of the gate, we have used standard video conferencing platforms, secure VPN networking infrastructure, and cloud-based services to provide seamless continuity to our entire customer base. We have been able to leverage all of our technologies for mobile WFM utilization.\n\nOur implementation model is platform independent and easily adapts to technology changes. Simply stated, we recognize the challenges and we have the tools and methodologies to meet those challenges together."
      }
    ]
  },
  {
    path: "/about-us/our-satisfied-clients",
    title: "Relationships built on delivery.",
    eyebrow: "Our satisfied clients",
    description:
      "The best measure of our work is what our clients have to say about it.",
    image: {
      src: "/images/about-clients.webp",
      alt: "Sunlight falling across the deck and raised sails of a wooden sailboat.",
      width: 1280,
      height: 854
    },
    narration: "/audio/about-clients.mp3",
    presentation: "testimonial",
    attribution: "Client",
    sections: [
      {
        body: "“Drisdell Consulting has provided Workforce Management support for our company, and our customers for over 3 years. During that time, we have received unprecedented praise and admiration from our clients for the support Drisdell Consulting has provided.\n\nTheir support has allowed our customers to bring their implementations and upgrades in, both on time and under budget, in all stages. I attribute this record of success to the management of Drisdell Consulting Services, and the professionalism of all Drisdell consultants. They are professional, highly skilled in their discipline, independent thinkers and reliable beyond any consultants we have ever worked with in the past.\n\nFor Workforce Management support at any of our clients, there would be no other firm we would even consider. I would recommend Drisdell Consulting to any client for their Workforce Management needs.”"
      }
    ]
  },
  {
    path: "/about-us/our-careers",
    title: "Good people make all the difference.",
    eyebrow: "Careers at DCS",
    description:
      "Bring your experience, curiosity, and commitment to work that makes a difference for our clients.",
    sections: [
      {
        title: "Your next chapter.",
        body: "We are always interested in talented, seasoned Labor Management professionals. Explore the skills and positions we look for, learn what consulting with DCS is like, and tell us about your experience."
      }
    ],
    action: {
      label: "Explore skills and positions",
      href: "/consultants/skills-and-positions"
    }
  },
  {
    path: "/consultants",
    title: "Your experience. New possibilities.",
    eyebrow: "Consulting with DCS",
    description:
      "Work on meaningful business challenges with people who value what you bring.",
    sections: [
      {
        title: "Make your experience count.",
        body: "At Drisdell Consulting Services, your potential is limited only by your talents and ambitions. Our engagements provide opportunities to apply what you know, learn from new challenges, and deliver real value to clients."
      },
      {
        title: "Find your place with us.",
        body: "Explore our consultant testimonials, learn about the skills we look for, and submit your résumé. We appreciate your interest in joining our organization."
      }
    ],
    action: {
      label: "Explore skills and positions",
      href: "/consultants/skills-and-positions"
    }
  },
  {
    path: "/consultants/consultant-testimonials",
    title: "A different kind of consulting career.",
    eyebrow: "Consultant testimonials",
    description:
      "A first-hand perspective on doing meaningful work with Drisdell Consulting Services.",
    sections: [
      {
        title: "In our consultant’s words",
        body: "“Drisdell Consulting represented a turning point in my career as an independent consultant. Due to the nature of its engagements, I was provided with opportunities to not only apply knowledge I had already gained but also to seek after and research meaningful solutions to challenges that I might not have previously encountered or entertained.\n\nI understand the implementation business much more clearly and can therefore think on my feet faster, provide more thoughtful solutions to business needs, and deliver better value to clients – and delivering value is what it is all about!”\n\n— Consultant, from the DCS consultant testimonial"
      }
    ]
  },
  {
    path: "/consultants/skills-and-positions",
    title: "Bring what you do best.",
    eyebrow: "Skills and positions",
    description:
      "We are always looking for talented, seasoned Labor Management professionals to join our team.",
    sections: [
      {
        title: "Experience that makes a difference.",
        body: "Our work spans Human Capital Management, Workforce Management, implementation and support, system integrations, project management, and custom solutions.\n\nIf you would like to be considered, please submit your résumé and tell us about your relevant experience. If you are responding to a specific position, include its corresponding position number in your submission."
      }
    ],
    action: {
      label: "Submit your résumé",
      href: "/consultants/submit-a-resume"
    }
  },
  {
    path: "/consultants/why-drisdell-consulting-services",
    title: "More room to do your best work.",
    eyebrow: "Why Drisdell Consulting Services?",
    description:
      "Your potential is limited only by your talents and ambitions.",
    sections: [
      {
        title: "Grow through the work.",
        body: "Working with leading companies on their toughest business challenges gives you exposure to different industries and business models. You will have opportunities to work with leaders who bring a diversity of experience and leadership styles.\n\nApply what you know, discover new ways of thinking, and gain experience that helps you excel."
      }
    ],
    action: {
      label: "Explore skills and positions",
      href: "/consultants/skills-and-positions"
    }
  }
] as const satisfies readonly SiteContent[];

export const existingFormPaths = [
  "/contact-us",
  "/consultants/submit-a-resume"
] as const satisfies readonly string[];

export function normalizeSitePath(path: string) {
  const stripped = (path.split(/[?#]/)[0] ?? "").replace(/\/+$/, "");
  return stripped === "" ? "/" : stripped;
}

export function findSitePage(path: string): SiteContent | undefined {
  const target = normalizeSitePath(path);
  return sitePages.find(page => page.path === target);
}

export type DetailParent = {
  id: MenuId;
  href: string;
  label: string;
  sidebarLabel: string;
};

const parents = [
  {
    id: "about",
    href: "/about-us",
    label: "About us",
    sidebarLabel: "About DCS"
  },
  {
    id: "consultants",
    href: "/consultants",
    label: "Consultants",
    sidebarLabel: "Consulting with DCS"
  }
] as const satisfies readonly DetailParent[];

export function detailParent(path: string): DetailParent {
  return normalizeSitePath(path).startsWith("/consultants")
    ? parents[1]
    : parents[0];
}

export type Crumb = { label: string; href?: string };

export function detailCrumbs(page: SiteContent): Crumb[] {
  const parent = detailParent(page.path);
  const home = { label: "Home", href: "/" };
  if (page.path === parent.href) return [home, { label: parent.label }];
  return [
    home,
    { label: parent.label, href: parent.href },
    { label: page.eyebrow }
  ];
}

/** The parent link followed by every page in that section, for the detail sidebar. */
export function siblingLinks(path: string): SiteAction[] {
  const parent = detailParent(path);
  const menu = menus.find(entry => entry.id === parent.id);
  const children = menu
    ? menuLinks(menu).map(({ label, href }) => ({ label, href }))
    : [];
  return [{ label: parent.sidebarLabel, href: parent.href }, ...children];
}

export function isWidePresentation(page: SiteContent | undefined) {
  return (
    page?.presentation === "delivery" || page?.presentation === "expertise"
  );
}
