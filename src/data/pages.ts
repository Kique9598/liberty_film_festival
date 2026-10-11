type PageType = {
  name: string;
  path: string;
  showInNav: boolean;
};

export const pages = {
  index: {
    name: "Home",
    path: "/",
    showInNav: true,
  },
  about: {
    name: "About",
    path: "/about",
    showInNav: true,
  },
  submit: {
    name: "Submit",
    path: "/submit",
    showInNav: true,
  },
  tickets: {
    name: "Tickets",
    path: "/tickets",
    showInNav: true,
  },
  donate: {
    name: "Support",
    path: "/support",
    showInNav: true,
  },
  profile: {
    name: "Profile",
    path: "/profile",
    showInNav: false,
  },
} as const satisfies Record<string, PageType>;
