import Account from "./Account";
import { addressSchema } from "./reference-models/Address";
import { openingTimesSchema } from "./reference-models/OpeningTimes";
import { IProviderProfile, providerProfileSchema } from "./ProviderProfile";

export interface IBusiness extends IProviderProfile {
  website?: string;
  address?: object;
  openingTimes?: object;
}

const Business = Account.discriminator<IBusiness>(
  "Business",
  providerProfileSchema.clone().add({
    website: {
      type: String,
    },
    address: addressSchema,
    openingTimes: openingTimesSchema,
  })
);

export default Business;
