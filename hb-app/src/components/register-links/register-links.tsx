import Link from "next/link";

export function RegisterSPLink() {
  return (
    <div data-testid="register-sp-link">
      <Link href="/sign-up/service-provider">
        Register as a Service Provider
      </Link>
    </div>
  );
}

export function RegisterPreviousLink() {
  return (
    <div data-testid="register-sp-link">
      <Link href="/sign-up/migrate-previous">Migrate me</Link>
    </div>
  );
}

export function RegisterBusinessLink() {
  return (
    <div data-testid="register-bu-link">
      <Link href="/sign-up/business">Register as a Business</Link>
    </div>
  );
}

export function RegisterCustomerLink() {
  return (
    <div data-testid="register-cu-link">
      <Link href="/sign-up/customer">Register as a Customer</Link>
    </div>
  );
}
