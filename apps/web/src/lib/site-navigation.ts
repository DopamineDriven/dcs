export const homeUrl = "/";
export const contactUrl = "/contact-us";
export type CompanyGroupProps = {
  title: string;
  links: ExpertiseLink[];
};

export type ExpertiseLink = {
  label: string;
  description: string;
  href: string;
};

export type ConsultantLink = ExpertiseLink;

export const companyGroups = [
  {
    title: "Who we are",
    links: [
      {
        label: "Our mission",
        description: "Clear purpose. Real commitment.",
        href: "/about-us/our-mission"
      },
      {
        label: "Our organization",
        description: "Independent. Since 1995.",
        href: "/about-us/our-organization"
      },
      {
        label: "Our world",
        description: "Expertise wherever you work.",
        href: "/about-us/our-world"
      }
    ]
  },
  {
    title: "What we bring",
    links: [
      {
        label: "Our expertise",
        description: "Know-how that moves you forward.",
        href: "/about-us/our-expertise"
      },
      {
        label: "Our consultants",
        description: "Meet your next problem-solvers.",
        href: "/about-us/our-consultants"
      },
      {
        label: "Project delivery",
        description: "From day one to done.",
        href: "/about-us/our-project-delivery"
      }
    ]
  },
  {
    title: "Who we work with",
    links: [
      {
        label: "Our customers",
        description: "Built around your business.",
        href: "/about-us/our-customers"
      },
      {
        label: "Satisfied clients",
        description: "Relationships built on delivery.",
        href: "/about-us/our-satisfied-clients"
      },
      {
        label: "Careers at DCS",
        description: "Good work. Good people.",
        href: "/about-us/our-careers"
      }
    ]
  }
] satisfies CompanyGroupProps[];

export const expertiseLinks = [
  {
    label: "Workforce & HCM systems",
    description: "Implementation, configuration, and support.",
    href: "/about-us/our-expertise#workforce"
  },
  {
    label: "Payroll & integrations",
    description: "Connect the systems your people rely on.",
    href: "/about-us/our-expertise#integrations"
  },
  {
    label: "Project delivery",
    description: "Get the right outcome, from start to finish.",
    href: "/about-us/our-project-delivery"
  },
  {
    label: "Custom solutions",
    description: "Software that works the way you do.",
    href: "/about-us/our-expertise#custom-solutions"
  }
] satisfies ExpertiseLink[];

export const consultantLinks = [
  {
    label: "Consultant testimonials",
    description: "Hear from people who know us best.",
    href: "/consultants/consultant-testimonials"
  },
  {
    label: "Skills and positions",
    description: "Find where your experience belongs.",
    href: "/consultants/skills-and-positions"
  },
  {
    label: "Submit a résumé",
    description: "Start your next chapter with DCS.",
    href: "/consultants/submit-a-resume"
  },
  {
    label: "Why Drisdell?",
    description: "A different kind of consultancy.",
    href: "/consultants/why-drisdell-consulting-services"
  }
] satisfies ConsultantLink[];

export type NavLink = { label: string; description: string; href: string };
export type NavGroup = { title: string; links: readonly NavLink[] };
export type MenuId = "about" | "consultants";
export type ParentId = "home" | MenuId | "contact";

export type NavMenu = {
  id: MenuId;
  label: string;
  href: string;
  eyebrow: string;
  headline: string;
  blurb: string;
  cta: { label: string; href: string };
  groups: readonly NavGroup[];
};

export const menus = [
  {
    id: "about",
    label: "About Us",
    href: "/about-us",
    eyebrow: "In the company of experts",
    headline: "Good people.\nLasting partnerships.",
    blurb:
      "Independent thinking. Personal attention. A commitment that lasts beyond go-live.",
    cta: { label: "Get to know DCS", href: "/about-us" },
    groups: [
      {
        title: "Who we are",
        links: [
          {
            label: "Our mission",
            description: "Clear purpose. Real commitment.",
            href: "/about-us/our-mission"
          },
          {
            label: "Our organization",
            description: "Independent. Since 1995.",
            href: "/about-us/our-organization"
          },
          {
            label: "Our world",
            description: "Expertise wherever you work.",
            href: "/about-us/our-world"
          }
        ]
      },
      {
        title: "What we bring",
        links: [
          {
            label: "Our expertise",
            description: "Know-how that moves you forward.",
            href: "/about-us/our-expertise"
          },
          {
            label: "Our consultants",
            description: "Meet your next problem-solvers.",
            href: "/about-us/our-consultants"
          },
          {
            label: "Project delivery",
            description: "From day one to done.",
            href: "/about-us/our-project-delivery"
          }
        ]
      },
      {
        title: "Who we work with",
        links: [
          {
            label: "Our customers",
            description: "Built around your business.",
            href: "/about-us/our-customers"
          },
          {
            label: "Satisfied clients",
            description: "Relationships built on delivery.",
            href: "/about-us/our-satisfied-clients"
          },
          {
            label: "Careers at DCS",
            description: "Good work. Good people.",
            href: "/about-us/our-careers"
          }
        ]
      }
    ]
  },
  {
    id: "consultants",
    label: "Consultants",
    href: "/consultants",
    eyebrow: "In the company of experts",
    headline: "Experience is\nour difference.",
    blurb:
      "Independent thinking. Personal attention. A commitment that lasts beyond go-live.",
    cta: { label: "Consulting with DCS", href: "/consultants" },
    groups: [
      {
        title: "The people behind the work",
        links: [
          {
            label: "Consultant testimonials",
            description: "Hear from people who know us best.",
            href: "/consultants/consultant-testimonials"
          },
          {
            label: "Skills and positions",
            description: "Find where your experience belongs.",
            href: "/consultants/skills-and-positions"
          },
          {
            label: "Submit a résumé",
            description: "Start your next chapter with DCS.",
            href: "/consultants/submit-a-resume"
          },
          {
            label: "Why Drisdell?",
            description: "A different kind of consultancy.",
            href: "/consultants/why-drisdell-consulting-services"
          }
        ]
      }
    ]
  }
] as const satisfies readonly NavMenu[];

export function menuLinks(menu: NavMenu) {
  return menu.groups.flatMap(group => group.links);
}

const parents = [
  { id: "about", prefix: "/about-us" },
  { id: "consultants", prefix: "/consultants" },
  { id: "contact", prefix: contactUrl }
] as const satisfies readonly { id: ParentId; prefix: string }[];

export function activeParent(pathname: string): ParentId | undefined {
  const stripped = (pathname.split(/[?#]/)[0] ?? "").replace(/\/+$/, "");
  const path = stripped === "" ? homeUrl : stripped;
  if (path === homeUrl) return "home";
  return parents.find(
    parent => path === parent.prefix || path.startsWith(`${parent.prefix}/`)
  )?.id;
}
