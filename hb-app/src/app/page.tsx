import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1 className="text-darkpapyrus font-extrabold text-[44px]">
        Welcome to HB app
      </h1>
      <Link
        href="/register/service-provider"
        className="hidden md:block text-lightAqua"
      >
        Register as service provider
      </Link>
      <Link
        href="/register/customer"
        className="hidden md:block text-lightAqua"
      >
        Register as customer
      </Link>
    </div>
  );
}
