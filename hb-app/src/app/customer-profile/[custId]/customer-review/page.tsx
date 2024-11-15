import { Params } from "../../../../../types";

export default function CustomerReview({ params }: { params: Params }) {
  return <div>Customer Review ${params.custId}</div>;
}
