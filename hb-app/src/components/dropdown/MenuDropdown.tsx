"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuSignOutButton } from "../sign-out/SignOutButton";

export const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm w-20"
      >
        Menu
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <p>Hello, gorgeous!</p>
          </div>

          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                href="/sign-in"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Sign In
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Download the app
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Contact us
              </a>
            </li>
          </ul>

          <div className="py-2">
            <MenuSignOutButton />
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};
