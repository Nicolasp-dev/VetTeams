import { fireEvent, render, screen } from "@testing-library/react";
import HomeComponent from "../../js-top-gun/components/Home/HomeComponent";

describe("HomeComponent", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<HomeComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});