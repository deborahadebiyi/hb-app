import { render, screen } from "@testing-library/react";
import Register from "../../../app/sign-up/page";

describe("Register", () => {
  it("renders a heading", () => {
    render(<Register />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
