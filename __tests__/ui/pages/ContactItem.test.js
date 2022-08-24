import { fireEvent, render, screen } from "@testing-library/react";
import ContactItem from "../../../components/AppointmentForm/ContactItem";

describe("ContactItem", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<ContactItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
