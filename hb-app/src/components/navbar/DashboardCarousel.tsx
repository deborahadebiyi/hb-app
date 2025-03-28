import {
  HomeIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  ClipboardIcon,
  // SparklesIcon,
  // ChartBarIcon,
  // SpeakerWaveIcon,
  // CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "My Page", href: "/booking-page", icon: HomeIcon },
  {
    name: "Bookings",
    href: "/dashboard/bookings",
    icon: DocumentDuplicateIcon,
  },
  { name: "My Calendar", href: "/dashboard/calendar", icon: CalendarDaysIcon },
  // { name: "My Roundup", href: "/dashboard/roundup", icon: ChartBarIcon },
  // {
  //   name: "Work/Life Balance",
  //   href: "/dashboard/worklife-balance",
  //   icon: SparklesIcon,
  // },
  { name: "My Policies", href: "/dashboard/policies", icon: ClipboardIcon },
  // { name: "Broadcast", href: "/dashboard/broadcast", icon: SpeakerWaveIcon },
  // { name: "My Tasks", href: "/dashboard/tasks", icon: CheckCircleIcon },
];

export default function DashboardCarousel() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-right gap-10 p-4 max-auto">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center justify-center p-4 text-lg space-y-2 h-40 w-80 bg-goldy rounded-xl shadow-md hover:bg-darkgoldy transition-transform duration-200 hover:scale-105"
            >
              <LinkIcon className="w-6 h-6" />
              <p className="hidden md:block">{link.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
