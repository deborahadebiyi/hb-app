import { SubscriptionDisplay } from "@/components/subscriptions/Pricing";
export default async function RegisterServiceProvider() {
  return <SubscriptionDisplay />;
  /**
   * Need to take all details
   * username + password with validation
   * create session
   * redirect to profile with their business-name
   * add i buttons for certain fields so it's understood why we collect this data
   * also need to generate a privacy policy
   * also need to create an audit log
   */
}
