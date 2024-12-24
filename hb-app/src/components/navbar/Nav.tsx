import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-lightAqua p-4 !text-white">
      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/customer-profile"> My Profile </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/subscribe">Get Started</Link>
      </div>
    </nav>
  );
};

export default Nav;
