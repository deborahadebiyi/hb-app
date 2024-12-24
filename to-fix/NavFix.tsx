// import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

// let navLinks = [];

// export interface INavLink {
//   name?: string;
//   href: string;
//   icon?: unknown;
// }

// const spNavLinks: INavLink[] = [
//   {
//     href: "/",
//     icon: HomeIcon,
//   },
//   {
//     name: "My Page",
//     href: "/my-page",
//     // icon: SparklesIcon
//   },
//   {
//     name: "Dashboard",
//     href: "/dashboard",
//     //  icon: PresentationChartLineIcon
//   },
//   {
//     name: "Log-in",
//     href: "/login",
//   },
//   {
//     // name: "Settings",
//     href: "/settings",
//     icon: UserCircleIcon,
//   },
// ];

// const cuNavLinks: INavLink[] = [
//   {
//     href: "/",
//     icon: HomeIcon,
//   },
//   {
//     name: "My Profile",
//     href: "/my-page",
//     // icon: SparklesIcon
//   },
//   {
//     name: "Log-in",
//     href: "/login",
//   },
//   {
//     // name: "Settings",
//     href: "/settings",
//     icon: UserCircleIcon,
//   },
// ];

// const Nav = (role: string) => {
//   // role === "service-provider"
//   //   ? (navLinks = spNavLinks)
//   //   : (navLinks = cuNavLinks);

//   // return (
//   // <nav className="flex justify-between items-center bg-lightAqua p-4 !text-white">
//   //   <div className="flex items-center space-x-4">
//   //     <Link href="/">Home</Link>
//   //     <Link href="/customer-profile"> My Profile </Link>
//   //     <Link href="/dashboard">Dashboard</Link>
//   //     <Link href="/login">Login</Link>
//   //     <Link href="/subscribe">Get Started</Link>
//   //   </div>
//   // </nav>
//   // );

//   return (
//     // add conditional logic, if role === customer then sidenav should include different links
//     // let links
//     // initialise an array of links for different roles
//     // add a condition to ascertain the role and then assign role's links to "links" and map as below
//     <>
//       {navLinks.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <a
//             key={link.name}
//             href={link.href}
//             className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-darkpapyrus p-3 text-sm hover:bg-lightGold hover:text-white text-white md:flex-none md:justify-start md:p-2 md:px-3 font-medium"
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{link.name}</p>
//           </a>
//         );
//       })}
//     </>
//   );
// };

// export default Nav;
