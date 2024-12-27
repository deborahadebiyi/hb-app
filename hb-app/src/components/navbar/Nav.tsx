import {
  ClipboardDocumentCheckIcon,
  HomeIcon,
  ListBulletIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const NavHomeIcon = HomeIcon;
const NavLoginIcon = UserCircleIcon;
const NavGetStartedIcon = ClipboardDocumentCheckIcon;
const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-lightAqua p-4 !text-white">
      <div className="flex items-left space-x-6">
        <Link href="/">
          <NavHomeIcon className="w-6" />
        </Link>
        {/* <Link href="/customer-profile"> My Profile </Link> // this will need to
        be conditionally rendered based on role */}
        {/* <Link href="/dashboard">Dashboard</Link> // this will need to be
        conditionally rendered based on role */}
      </div>
      <div className="flex items-center font-extrabold">
        <Link href="/">HEYBABE</Link>
      </div>
      <div className="flex items-right space-x-4">
        <Link href="/register">Register</Link>
        <Link href="/subscribe">
          <NavGetStartedIcon className="w-6" />
        </Link>
        <Link href="/login">
          <NavLoginIcon className="w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
