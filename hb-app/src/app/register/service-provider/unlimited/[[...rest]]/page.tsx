import { SignUp } from "@clerk/nextjs";

export default function RegisterUnlimited() {
  return <SignUp />;
}

/**
 *

  Clerk sign up collects the following info, the other fields will need to be derived from the flow or collected
  on another page:
  first name 
  last name
  username 
  password
  phone number 
  email address

  Complete profile (progress bar, may need to assign percentages to different fields) 
  // could create a function that gets the whole SP object and fields that are null minuses a percentage

  accountId: string; -> GENERATED
  // username: string; 
  // password: string;
  // email: string;
  // telephoneNumber: string;
  businessTelephoneNumber?: string; COMPLETE-PROFILE
  isVerified: boolean; -> DERIVED FROM FLOW
  country: string; COMPLETE-PROFILE
  rating: number; DEFAULT VALUE 
  ratingCount: number; -> DERIVED FROM FLOW
  role: string; -> DERIVED FROM FLOW
  accountCreatedAt: Date; -> GENERATED
  isSubscribed: boolean; -> DERIVED FROM FLOW
  subscriptionType: string; -> DERIVED FROM FLOW 
  isPaused: boolean; // in the case of payment failurexs -> DERIVED FROM FLOW
  extraOfferings?: string[]; COMPLETE-PROFILE
  catersTo?: string[]; COMPLETE-PROFILE
  headerImage?: string; COMPLETE-PROFILE
  serviceList: IService[]; COMPLETE-PROFILE
 */
