import { SignUp } from "@clerk/nextjs";

export default function RegisterPremium() {
  return (
    <div>
      <h3>Register with a premium subscription</h3>
      <SignUp />
    </div>
  );
}
