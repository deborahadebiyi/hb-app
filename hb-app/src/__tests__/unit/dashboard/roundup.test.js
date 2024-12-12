import { render, screen } from "@testing-library/react";
import Roundup from "../../../app/dashboard/roundup/page";

describe("Roundup", () => {
  it("renders a heading", () => {
    render(<Roundup />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
