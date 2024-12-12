import Link from "next/link";

export function RegisterSPLink() {
  return (
    <div data-testid="register-sp-link">
      <Link href="/register/service-provider">
        Register as an Service Provider
      </Link>
    </div>
  );
}

export function RegisterBusinessLink() {
  return (
    <div data-testid="register-bu-link">
      <Link href="/register/business">Register as a Business</Link>
    </div>
  );
}

export function RegisterCustomerLink() {
  return (
    <div data-testid="register-cu-link">
      <Link href="/register/customer">Register as a Customer</Link>
    </div>
  );
}
