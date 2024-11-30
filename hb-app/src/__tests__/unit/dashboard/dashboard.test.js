import { render, screen } from "@testing-library/react";
import Dashboard from "../../../app/dashboard/page";

describe("Register", () => {
  it("renders a heading", () => {
    render(<Dashboard />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
