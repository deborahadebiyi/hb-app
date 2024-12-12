import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-navigation p-4 text-textHover font-extrabold">
      <div className="flex items-center space-x-4">
        <Link href="/"> Home </Link>
        <Link href="/customer-profile/[custId]?custId=001"> My Profile </Link>
        {/* FIX ME */}
        <Link href="/dashboard">My Dashboard</Link>
      </div>
      <Link href="/login" className="flex items-right space-x-4">
        Login
      </Link>
    </nav>
  );
};

export default Nav;
