import {
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  ListBulletIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import NavSearchbar from "../search-bar/NavSearchbar";

const NavHomeIcon = HomeIcon;
const NavLoginIcon = UserCircleIcon;
const NavGetStartedIcon = ListBulletIcon;
const NavDashboardIcon = ChartPieIcon;
const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-lightAqua p-4 !text-white">
      <div className="flex items-left space-x-6">
        <NavSearchbar />
        {/* <Link href="/customer-profile"> My Profile </Link> // this will need to
        be conditionally rendered based on role */}
      </div>
      <div className="flex items-center font-extrabold">
        <Link href="/">MEINTEIN</Link>
      </div>
      <div className="flex items-right space-x-4">
        <Link href="/register">Register</Link>
        <SignUpButton />
        <Link href="/dashboard">
          <NavDashboardIcon className="w-6" />
        </Link>
        {/* Dashboard will need to be conditionally rendered based on role */}
        <Link href="/subscribe">
          <NavGetStartedIcon className="w-6" />
        </Link>
        <Link href="/">
          <NavHomeIcon className="w-6" />
        </Link>
        <Link href="/sign-in">
          <NavLoginIcon className="w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
