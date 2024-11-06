import Account from "./Account";
import { IProviderProfile, providerProfileSchema } from "./ProviderProfile";

export interface IServiceProvider extends IProviderProfile {
  bookingPageUrl: string;
}

const ServiceProvider = Account.discriminator<IServiceProvider>(
  "ServiceProvider",
  providerProfileSchema.clone().add({
    bookingPageUrl: {
      type: String,
      default: "",
      required: true,
    },
  })
);

export default ServiceProvider;
