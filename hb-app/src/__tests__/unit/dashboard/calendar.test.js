import { render, screen } from "@testing-library/react";
import Calendar from "../../../app/dashboard/calendar/page";

describe("Calendar", () => {
  it("renders a heading", () => {
    render(<Calendar />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
