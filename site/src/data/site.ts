export type NavItem = { label: string; href: string };

export const site = {
  name: "Duke Club Cycling",
  tagline: "Ride. Race. Community.",
  email: "duke.cycling@duke.edu",
  instagram: "https://instagram.com/dukecycling",
  strava: "https://www.strava.com/clubs/dukecycling",
  discord: "",
  address: "Duke University, Durham, NC",
  calendarEmbedUrl: "", // e.g. public Google Calendar embed URL
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Rides", href: "/rides" },
    { label: "Racing", href: "/racing" },
    { label: "Events", href: "/events" },
    { label: "Routes", href: "/routes" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Resources", href: "/resources" },
    { label: "Calendar", href: "/calendar" },
    { label: "News", href: "/news" },
    { label: "Join", href: "/join" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};

export default site;
