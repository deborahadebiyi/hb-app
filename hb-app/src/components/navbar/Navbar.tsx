import Link from "next/link";
import NavSearchbar from "../search-bar/NavSearchbar";
import {
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
  ListBulletIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { UserDropdown } from "../dropdown/UserDropdown";
import { SignedInNavbarProps } from "../types";
import { MenuDropdown } from "../dropdown/MenuDropdown";

// Service Provider icons
const NavDashboardIcon = ChartBarSquareIcon;
const NavTipsIcon = LightBulbIcon;
const NavBookingPageIcon = ListBulletIcon;

// Customer icons
const NavMaintenanceDiaryIcon = ClipboardDocumentCheckIcon;
const NavProfileIcon = SparklesIcon;

export const DefaultNavbar = () => {
  return (
    <nav className="flex justify-between items-center bg-goldy p-4 !text-white">
      <div className="flex items-left space-x-6">
        <NavSearchbar />
      </div>
      <div className="flex items-center font-extrabold">
        <Link href="/">MEINTEIN</Link>
      </div>
      <div className="flex items-right space-x-4">
        <Link href="/sign-up">Sign-up</Link>
        <Link href="/subscribe">Pricing</Link>

        <MenuDropdown />
      </div>
    </nav>
  );
};

export const SPNavbar = ({ role, subscription, name }: SignedInNavbarProps) => {
  return (
    <nav className="flex justify-between items-center bg-goldy p-4 !text-white">
      <div className="flex items-left space-x-6">
        <NavSearchbar />
      </div>
      <div className="flex items-center font-extrabold">
        <Link href="/">MEINTEIN</Link>
      </div>
      <div className="flex items-right space-x-4">
        <Link href="/tips">
          <NavTipsIcon className="w-6" />
        </Link>
        <Link href="/dashboard">
          <NavDashboardIcon className="w-6" />
        </Link>
        <Link href="/booking-page">
          <NavBookingPageIcon className="w-6" />
        </Link>
        <UserDropdown role={role} subscription={subscription} name={name} />
      </div>
    </nav>
  );
};

export const CustomerNavbar = ({ role, name }: SignedInNavbarProps) => {
  return (
    <nav className="flex justify-between items-center bg-goldy p-4 !text-white">
      <div className="flex items-left space-x-6">
        <NavSearchbar />
      </div>
      <div className="flex items-center font-extrabold">
        <Link href="/">MEINTEIN</Link>
      </div>
      <div className="flex items-right space-x-4">
        <Link href="/my-profile">
          <NavProfileIcon className="w-6" />
        </Link>
        <Link href="/maintenance-calendar">
          <NavMaintenanceDiaryIcon className="w-6" />
        </Link>
        <UserDropdown role={role} name={name} />
      </div>
    </nav>
  );
};
