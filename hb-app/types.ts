export interface Params {
  custId?: string;
  spId?: string;
  businessId?: string;
}

export interface IReview {
  reviewId: string;
  spId: string;
  custId: string;
  ratingTags: string[];
  rating: number;
  text: string;
  likes: number;
  timestamp: Date;
}

export interface IServiceProvider {
  spId: string;
  spName: string;
  username: string;
  password: string;
  email: string;
  number: string;
  country: string;
  location: string;
  services: string[];
  rating: number;
}

export interface ICustomer {
  custId: string;
  username: string;
  email: string;
  number: string;
  country: string;
  location?: string;
  dateOfBirth?: Date;
  rating: number;
}

export interface IBusiness {
  businessId: string;
  country: string;
  location: string;
  number: string;
  address?: object;
  services: string[];
  openingTimes?: object;
  rating: number;
}
