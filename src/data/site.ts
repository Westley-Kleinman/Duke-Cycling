export type NavItem = { label: string; href: string };

export const site = {
  name: "Duke Club Cycling",
  tagline: "Ride. Race. Community.",
  email: "clubcycling@duke.edu",
  instagram: "https://instagram.com/dukecycling",
  strava: "https://www.strava.com/clubs/dukecycling",
  discord: "",
  address: "Duke University, Durham, NC",
  nav: [
  { label: "Home", href: "/" },
  { label: "Rides", href: "/rides" },
  { label: "Routes", href: "/routes" },
  { label: "Races", href: "/races" },
  { label: "History", href: "/history" },
  { label: "Team", href: "/team" },
  { label: "Sponsors", href: "/sponsors" },
  ] as NavItem[],
};

export default site;
