import { auth, currentUser } from "@clerk/nextjs/server";
import { DefaultNavbar, SPNavbar, CustomerNavbar } from "./Navbar";

export default async function Nav() {
  const { userId } = await auth();
  const user = await currentUser();
  const firstName = user?.firstName;
  const role = user?.publicMetadata?.userRole;
  const subscription = user?.publicMetadata?.subscription;

  if (!userId) {
    return <DefaultNavbar />;
  } else if (role === "customer") {
    return <CustomerNavbar role={role} name={firstName} />;
  } else if (role === "serviceprovider") {
    return (
      <SPNavbar role={role} subscription={subscription} name={firstName} />
    );
  }
  return <DefaultNavbar />;
}
