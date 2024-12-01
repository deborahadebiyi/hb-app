// import SpProfile from "@/pages/service-provider/SpProfile";
// import {
//   ServiceProvider,
//   IServiceProvider,
// } from "@/models/user-models/ServiceProvider";
// import { profile } from "console";
// // import { NextResponse } from "next/server";

// export default function ServiceProviderProfile({
//   params,
// }: {
//   params: IServiceProvider;
// }) {
//   const getProfile = async () => {
//     const serviceProviderId = params.accountId;

//     const profile = await ServiceProvider.find({ serviceProviderId });
//     const username = profile.providerName;

//     //     NextResponse.json(profile);
//   };
//   return (
//     <div>
//       Service Provider Profile ${profile}
//       <SpProfile />;
//     </div>
//   );
// }
