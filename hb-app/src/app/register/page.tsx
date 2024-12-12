import {
  RegisterSPLink,
  RegisterBusinessLink,
  RegisterCustomerLink,
} from "@/ui/register-links/register-links";

export default function Register() {
  return (
    <div>
      <h1> Register page </h1>;
      <RegisterSPLink />;
      <RegisterBusinessLink />
      <RegisterCustomerLink />
    </div>
  );
}
