import { render, screen } from "@testing-library/react";
import Policies from "../../../app/dashboard/policies/page";

describe("Policies", () => {
  it("renders a heading", () => {
    render(<Policies />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
