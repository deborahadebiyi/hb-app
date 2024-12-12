import { render, screen } from "@testing-library/react";
import WorkLifeBalance from "../../../app/dashboard/worklife-balance/page";

describe("WorkLifeBalance", () => {
  it("renders a heading", () => {
    render(<WorkLifeBalance />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
