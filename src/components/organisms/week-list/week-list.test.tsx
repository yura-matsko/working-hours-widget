import { render } from "@testing-library/react";
import { WeekList } from ".";

describe("week-list", () => {
  it("renders list with no date range provided", () => {
    const { getAllByText } = render(<WeekList data={null} isLoading={false} />);

    expect(getAllByText("Closed")).toHaveLength(7);
  });

  it("renders today mark", () => {
    const { getByText } = render(<WeekList data={null} isLoading={false} />);

    expect(getByText("Today")).toBeInTheDocument();
  });

  it("renders list with loading state", () => {
    const { getAllByTestId } = render(
      <WeekList data={null} isLoading={true} />
    );

    expect(getAllByTestId("loader")).toHaveLength(7);
  });
});
