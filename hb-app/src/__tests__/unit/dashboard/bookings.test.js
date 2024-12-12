import { render, screen } from "@testing-library/react";
import Bookings from "../../../app/dashboard/bookings/page";

describe("Bookings", () => {
  it("renders a heading", () => {
    render(<Bookings />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
