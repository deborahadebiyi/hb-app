import { MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";

const NavSearchbar = () => {
  return (
    <form className="flex items-center max-w-sm mx-auto">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SparklesIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-goldy focus:border-darkgoldy block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-goldy dark:focus:border-darkgoldy"
          placeholder="Search..."
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-goldy rounded-lg border border-goldy hover:bg-darkgoldy focus:ring-4 focus:outline-none focus:ring-goldy dark:bg-goldy dark:hover:bg-darkgoldy dark:focus:ring-darkgoldy"
      >
        <MagnifyingGlassIcon className="w-4 text-white" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default NavSearchbar;
