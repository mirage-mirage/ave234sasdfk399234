import { render, screen } from "@testing-library/react";
import FormInput from "../FormInput";

describe("FormInputField:", () => {
  test("renders input field", () => {
    render(<FormInput></FormInput>);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });
  test("shows proper label and value", () => {
    render(
      <FormInput
        label="Testing"
        value="TestingValue"
        onChange={(event) => null}
      />
    );
    const element = screen.getByLabelText("Testing");
    expect(element).toHaveValue("TestingValue");
  });
  test("can have number type with max and min limit", () => {
    render(<FormInput label="Testing" type="number" max="10" min="0" />);
    const element = screen.getByLabelText("Testing");
    expect(element).toHaveProperty("type", "number");
    expect(element).toHaveProperty("min", "0");
    expect(element).toHaveProperty("max", "10");
  });
  test("if not touched shows valid class style and  no error message", () => {
    render(
      <FormInput
        isValid={false}
        isTouched={false}
        label="Testing"
        errorMessage="errorMessage"
      />
    );
    const element = screen.getByLabelText("Testing");
    expect(element).toHaveClass("form-control bg-opacity-10", { exact: true });
    const errorMessage = screen.queryByText(/errorMessage/);
    expect(errorMessage).toBeNull;
  });
  test("with invalid input has invalid class style and error message", () => {
    render(
      <FormInput
        isValid={false}
        isTouched={true}
        label="Testing"
        errorMessage="errorMessage"
      />
    );
    const element = screen.getByLabelText("Testing");
    expect(element).toHaveClass("bg-danger");
    const errorMessage = screen.getByText(/errorMessage/);
    expect(errorMessage).toBeInTheDocument();
  });
  test("with valid input has valid class style", () => {
    render(
      <FormInput
        isValid={true}
        isTouched={true}
        label="Testing"
        errorMessage="errorMessage"
      />
    );
    const element = screen.getByLabelText("Testing");
    expect(element).toHaveClass("bg-success");
  });
});
