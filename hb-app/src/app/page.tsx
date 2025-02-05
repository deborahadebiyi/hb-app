import Link from "next/link";
import { gradientBtn } from "@/components/button-variants/gradient-button";

export default function Homepage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-darkpapyrus font-extrabold text-[44px] text-center">
        Welcome to HB app
      </h1>
      <h3>No commission fees!!</h3>
      <div className="place-items-center">
        <button className={gradientBtn}>
          <Link href="/register/service-provider">
            Register as service provider
          </Link>
        </button>
        <button className={gradientBtn}>
          <Link href="/register/customer">Register as customer</Link>
        </button>
      </div>
    </div>
  );
}
