export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete: boolean;
      isSubscribed?: boolean;
      userRole: "customer" | "serviceprovider";
    };
  }
}
