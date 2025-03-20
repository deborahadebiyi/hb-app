/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useClerk } from "@clerk/nextjs";

export const MenuSignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <a
      href="/"
      onClick={() => signOut({ redirectUrl: "/" })}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
    >
      Sign Out
    </a>
  );
};
