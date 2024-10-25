import React from "react";
import { Params } from "../../../../../types";

const CustomerReview = ({ params }: { params: Params }) => {
  return <div>Customer Review ${params.custId}</div>;
};

export default CustomerReview;
