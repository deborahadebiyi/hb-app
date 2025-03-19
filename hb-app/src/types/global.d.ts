export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
      userRole?: "customer" | "serviceprovider";
    };
  }
}
