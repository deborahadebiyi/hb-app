import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import NavSearchbar from "../search-bar/NavSearchbar";
import {
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  HomeIcon,
  LightBulbIcon,
  ListBulletIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

// Standard nav icons
const NavHomeIcon = HomeIcon;
const NavGetStartedIcon = ListBulletIcon;

// Sp icons
const NavDashboardIcon = ChartPieIcon;
const NavTipsIcon = LightBulbIcon;

// Cu icons
const NavMaintainanceDiaryIcon = ClipboardDocumentCheckIcon;
const NavProfileIcon = UserCircleIcon;
const NavSettings = SparklesIcon;

export const DefaultNavBar = () => {
  <nav className="flex justify-between items-center bg-lightAqua p-4 !text-white">
    <div className="flex items-left space-x-6">
      <NavSearchbar />
    </div>
    <div className="flex items-center font-extrabold">
      <Link href="/">MEINTEIN</Link>
    </div>
    <div className="flex items-right space-x-4">
      <Link href="/register">Register</Link>
      <Link href="/subscribe">
        <NavGetStartedIcon className="w-6" />
      </Link>
      <Link href="/">
        <NavHomeIcon className="w-6" />
      </Link>
      <Link href="/sign-in">Login</Link>
    </div>
  </nav>;
};
