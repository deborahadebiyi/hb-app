import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NavSearchbar = () => {
  return (
    <form className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-4 text-gray-900" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
          placeholder="Search..."
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-darkpapyrus hover:bg-lightGold focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 font-extrabold"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default NavSearchbar;
