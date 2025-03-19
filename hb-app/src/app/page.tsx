import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/subscriptions/card";
import { standardBtn } from "@/components/button-variants/button";
import Link from "next/link";

export interface RegisterHomeLinks {
  userType: string;
  description: string;
  icon?: string;
  href: string;
  buttonDesc: string;
}

const registerHomeLinksList: RegisterHomeLinks[] = [
  {
    userType: "Service Providers",
    description:
      "Looking to manage your bookings and grow your business? Read more.",
    href: "/sign-up",
    buttonDesc: "Register",
  },
  {
    userType: "Migrate existing page",
    description:
      "Have an existing booking page you want to migrate? We can make the process seamless, click here.",
    href: "/sign-up",
    buttonDesc: "Migrate me",
  },
  {
    userType: "Customers",
    description:
      "Looking for quality service providers for your maintainance needs? Sign up now.",
    icon: "UserGroupIcon",
    href: "/sign-up",
    buttonDesc: "Register",
  },
  {
    userType: "Businesses",
    description:
      "Have a business on the high street and wanting to reach new customers? Read more here.",
    href: "/sign-up",
    buttonDesc: "Register",
  },
];

export default function RegisterHome() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center pt-8 pb-8">
        Peruse our offerings for your{" "}
        <span className="bg-gradient-to-b from-goldy to-darkgoldy text-transparent bg-clip-text italic font-extrabold">
          meintein
        </span>
        ance needs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {registerHomeLinksList.map((registerItem: RegisterHomeLinks) => (
          <Card key={registerItem.userType}>
            <CardHeader>
              <CardTitle>{registerItem.userType}</CardTitle>
              <CardDescription>{registerItem.description}</CardDescription>
              <CardContent>
                <button className={standardBtn}>
                  <Link href={registerItem.href}>
                    {registerItem.buttonDesc}
                  </Link>
                </button>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

// add footer with blog, contact us and privacy policy
