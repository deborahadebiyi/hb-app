import { ISocialMedia } from "@/models/reference-models/SocialMedia";

export interface SignedInProps {
  role: string;
  subscription?: string | unknown;
  name: string | null | undefined;
}

export interface ProfileCardProps {
  providerName: string;
  profileImage?: string;
  businessTelephoneNumber?: string;
  followers: number;
  socialMedia?: ISocialMedia;
  rating: number;
  ratingCount: number;
  location: string;
  serviceCategory: string[];
  extraOfferings?: string[];
  catersTo?: string[];
  headerImage?: string;
  bookingLink: string;
}
