import { render } from "@testing-library/react";
import AppointmentForm from "../../../components/AppointmentForm/AppointmentForm";

describe("AppointmentForm", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<AppointmentForm />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders AppointmentForm", () => {
    const wrapper = render(<AppointmentForm />);
    expect(wrapper.getByText("Quick Contact")).toBeInTheDocument();
  });
});
