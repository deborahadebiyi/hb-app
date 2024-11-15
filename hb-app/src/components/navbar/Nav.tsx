import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-navigation p-4">
      <div className="flex itens-center space-x-4">
        <Link href="/"> Home </Link>
        <Link href="/customer-profile/[custId]?custId=001"> My Profile </Link>
      </div>
    </nav>
  );
};

export default Nav;
