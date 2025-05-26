import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "PavementMen",
  description:
    "A barebones starter theme for PavementMen. Built with Astro, Tailwind CSS, and Markdown.",
  href: "https://pavementmen.com",
  author: "Nillab",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Blog",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
  documentation: {
    path: "https://docs.astro.build",
    label: "Documentation",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:ops@pavementmen.com",
  },
};
