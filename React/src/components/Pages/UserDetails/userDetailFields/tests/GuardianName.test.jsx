import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GuardianName from "../UserDetailsStep1/GuardianName";

describe("Guardian Component  ", () => {
  const renderComponent = () => {
    render(<GuardianName />);
    return screen.getByRole("textbox");
  };

  test("user can give input", () => {
    const GuardianNameInput = renderComponent();
    userEvent.click(GuardianNameInput);
    userEvent.type(GuardianNameInput, "sunday");
    expect(GuardianNameInput).toHaveValue("sunday");
  });

  test("is initially empty", () => {
    const view = renderComponent();
    expect(view).toHaveTextContent("");
    expect(view).toHaveClass("form-control bg-opacity-10", { exact: false });
    screen.debug;
  });
  test("user can give input", () => {
    const GuardianNameInput = renderComponent();

    userEvent.click(GuardianNameInput);
    userEvent.type(GuardianNameInput, "sunday");
    expect(GuardianNameInput).toHaveValue("sunday");
  });
  test("valid input background colour green", () => {
    const GuardianNameInput = renderComponent();

    userEvent.click(GuardianNameInput);
    userEvent.type(GuardianNameInput, "valid input");
    expect(GuardianNameInput).toHaveClass(
      "form-control bg-success bg-opacity-10",
      {
        exact: true,
      }
    );

    const errorMessage = screen.queryByText("*", {
      name: /error message/i,
      exact: false,
    });
    expect(errorMessage).toBeNull;
  });
  test("invalid input background colour red", () => {
    const GuardianNameInput = renderComponent();
    userEvent.click(GuardianNameInput);
    userEvent.type(GuardianNameInput, "invalid input 1233 ");
    expect(GuardianNameInput).toHaveClass(
      "form-control bg-danger bg-opacity-10",
      {
        exact: true,
      }
    );
    const errorMessage = screen.queryByText("*", {
      name: /error message/i,
      exact: false,
    });
    expect(errorMessage).toBeInTheDocument();
  });
});
