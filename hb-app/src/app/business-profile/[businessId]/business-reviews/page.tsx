import React from "react";
import { Params } from "../../../../../types";

const BusinessReviews = ({ params }: { params: Params }) => {
  return <div>Business Reviews ${params.businessId}</div>;
};

export default BusinessReviews;
