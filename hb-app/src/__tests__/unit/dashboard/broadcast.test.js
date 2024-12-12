import { render, screen } from "@testing-library/react";
import Broadcast from "../../../app/dashboard/broadcast/page";

describe("Broadcast", () => {
  it("renders a heading", () => {
    render(<Broadcast />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
