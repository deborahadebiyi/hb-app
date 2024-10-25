import React from "react";
import { Params } from "../../../../types";

const CustomerProfile = ({ params }: { params: Params }) => {
  return <div>Customer Profile ${params.custId}</div>;
};

export default CustomerProfile;
