import {
  HomeIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  ClipboardIcon,
  SparklesIcon,
  ChartBarIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Bookings",
    href: "/dashboard/bookings",
    icon: DocumentDuplicateIcon,
  },
  { name: "My Calendar", href: "/dashboard/calendar", icon: CalendarDaysIcon },
  { name: "My Roundup", href: "/dashboard/roundup", icon: ChartBarIcon },
  {
    name: "Work/Life Balance",
    href: "/dashboard/worklife-balance",
    icon: SparklesIcon,
  },
  { name: "My Policies", href: "/dashboard/policies", icon: ClipboardIcon },
  { name: "Broadcast", href: "/dashboard/broadcast", icon: SpeakerWaveIcon },
];

export default function NavLinks() {
  return (
    // add conditional logic, if role === customer then sidenav should include different links
    // let links
    // initialise an array of links for different roles
    // add a condition to ascertain the role and then assign role's links to "links" and map as below
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-navigationBtn p-3 text-sm font-medium hover:bg-reviewHover hover:text-textHover md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
