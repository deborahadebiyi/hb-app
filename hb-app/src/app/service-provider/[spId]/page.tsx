import React from "react";
import { Params } from "../../../../types";
import SpProfile from "@/pages/service-provider/SpProfile";
// import dbConnect from "@/lib/db";
// import ServiceProvider from "@/models/ServiceProvider";
// import { NextResponse } from "next/server";

const ServiceProviderProfile = ({ params }: { params: Params }) => {
  //   const getProfile = async () => {
  //     await dbConnect();

  //     const spId = params.spId;

  //     const profile = await ServiceProvider.find(spId);

  //     NextResponse.json(profile);
  //   };
  return (
    <div>
      Service Provider Profile ${params.spId}
      <SpProfile />;
    </div>
  );
};

export default ServiceProviderProfile;
