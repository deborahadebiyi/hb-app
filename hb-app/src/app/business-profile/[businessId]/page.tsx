import React from "react";
import { Params } from "../../../../types";

const BusinessProfile = ({ params }: { params: Params }) => {
  return <div>BusinessProfile ${params.businessId}</div>;
};

export default BusinessProfile;
