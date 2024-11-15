import { Params } from "../../../../types";

export default function BusinessProfile({ params }: { params: Params }) {
  return <div>BusinessProfile ${params.businessId}</div>;
}
