import { fireEvent, render, screen } from "@testing-library/react";
import NotFoundPage from "@/pages/404/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("NotFoundPage", () => {
  test("Matches DOM Snapshot", () => {
    const wrapper = render(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Should display the 404 Not found Page correctly", () => {
    render(<NotFoundPage />);
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
    }));

    const goHomeBtn = screen.getByRole("button", {
      name: /Go Home/,
    });

    fireEvent.click(goHomeBtn);

    expect(goHomeBtn).toBeInTheDocument();
  });
});
