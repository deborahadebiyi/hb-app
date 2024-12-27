import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { CheckIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { gradientBtn } from "../button-variants/gradient-button";

export interface SubscriptionProps {
  subscriptionType: string;
  popular: boolean;
  price: number;
  description: string;
  offerings: string[];
  billingCycle: string;
  freeTrial?: string;
  trialHref?: string;
  href: string;
  paymentLink?: string;
  buttonDesc: string;
}

const subscriptionList: SubscriptionProps[] = [
  // {
  //   subscriptionType: "Free trial",
  //   popular: false,
  //   price: 0,
  //   description:
  //     "Try our premium subscription for a month and see the difference",
  //   offerings: [
  //     "Full Premium access for a month",
  //     "1 team member",
  //     "Work/life balance",
  //     "Customisable service page",
  //     "Monthly overview",
  //   ],
  //   billingCycle: "month",
  //   href: "/register/service-provider/free-trial",
  //   buttonDesc: "Try free now",
  // },
  {
    subscriptionType: "Premium",
    popular: true,
    price: 12,
    description:
      "Everything you need to start managing appointments and payments",
    offerings: [
      "1 team member",
      "Work/life balance",
      "Customisable service page",
      "Monthly overview",
      "Migrate existing booking pages for free",
    ],
    billingCycle: "month",
    freeTrial: "Try HB free for a month",
    trialHref: "/register/service-provider/free-trial",
    href: "/register/service-provider/premium",
    paymentLink: "pay.me/stripe/premium",
    buttonDesc: "Get Now",
  },
  {
    subscriptionType: "Unlimited",
    popular: false,
    price: 18,
    description: "Everything you need to gain insights to grow your business",
    offerings: [
      "Up to 5 team members",
      "Sync with your calendar of choice",
      "Broadcast to customers",
      "Customisable service page",
      "Weekly stats",
    ],
    billingCycle: "month",
    href: "/register/service-provider/unlimited",
    paymentLink: "pay.me/stripe/unlimited",
    buttonDesc: "Get Now",
  },
];

export const SubscriptionDisplay = () => {
  return (
    <section id="pricing" className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-lightAqua to-darkpapyrus uppercase text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8 text-black">
        Choose a subscription based on your current needs knowing you&apos;ll be
        able to upgrade as you grow
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {subscriptionList.map((subscription: SubscriptionProps) => (
          <Card
            key={subscription.subscriptionType}
            className={
              subscription.popular === true
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between text-darkpapyrus">
                {subscription.subscriptionType}
                {subscription.popular === true ? (
                  <TrophyIcon className="size-7" />
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold text-black">
                  £{subscription.price}
                </span>
                <span className="text-muted-foreground text-black">
                  {" "}
                  {subscription.billingCycle}
                </span>
              </div>

              <CardDescription className="text-black">
                {subscription.description}
              </CardDescription>
              <a
                className="underline text-lightWhite"
                href={subscription.trialHref}
              >
                {subscription.freeTrial}
              </a>
            </CardHeader>

            <CardContent>
              <button className={gradientBtn}>
                {" "}
                <Link href={subscription.href}>{subscription.buttonDesc}</Link>
              </button>

              {/* <Link href={subscription.trialHref}>
                {subscription.freeTrial}
              </Link> */}
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {subscription.offerings.map((offering: string) => (
                  <span key={offering} className="flex">
                    <CheckIcon className="text-lightAqua size-4" />{" "}
                    <ol className="ml-2 text-black">{offering}</ol>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
