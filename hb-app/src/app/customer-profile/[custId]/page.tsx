import { Params } from "../../../../types";

export default function CustomerProfile({ params }: { params: Params }) {
  return <div>Customer Profile ${params.custId}</div>;
}
