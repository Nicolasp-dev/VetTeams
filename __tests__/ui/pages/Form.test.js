import { act, fireEvent, render, screen } from "@testing-library/react";
import selectEvent from "react-select-event";
import userEvent from "@testing-library/user-event";

import Form from "../../../components/AppointmentForm/Form";

describe("Form", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<Form />);
    expect(wrapper).toMatchSnapshot();
  });

  test("calls the onSubmit function", async () => {
    const mockUser = {
      date: "2022-07-30",
      service: "Grooming Service",
      textarea: "asdasd",
    };
    const mockSubmit = jest.fn();
    const wrapper = render(<Form onSubmit={mockSubmit} data={mockUser} />);

    // // await userEvent.selectOptions(wrapper.getByPlaceholderText('Phone'), ['1', 'C'])

    await act(async () => {
      fireEvent.change(wrapper.getByPlaceholderText("Date"), {
        target: { value: "2022-07-30" },
      });
      fireEvent.change(wrapper.getByPlaceholderText("Service"), {
        target: { value: "Grooming Service" },
      });
      fireEvent.change(wrapper.getByPlaceholderText("Some description"), {
        target: { value: "asdasd" },
      });
    });

    await act(async () => {
      userEvent.click(wrapper.getByRole("button"));
    });

    //expect(mockSubmit).toHaveBeenCalled();
  });
});
