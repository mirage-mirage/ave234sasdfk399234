import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoanAmount from "../LoanAmount";

const setup = () => {
  return render(<LoanAmount />);
};
afterEach(cleanup);

describe("Loan Amount Component", () => {
  test("is Rendered with initial value '' ", () => {
    setup();
    const loanAmount = screen.getByLabelText(/Loan Amount/);
    expect(loanAmount).toHaveValue(null);
  });
  test("valid input makes background green and no error message is shown", () => {
    setup();
    const loanAmount = screen.getByLabelText(/Loan Amount/);
    userEvent.clear(loanAmount);
    userEvent.type(loanAmount, "123");
    expect(loanAmount).toHaveValue(123);
    expect(loanAmount).toHaveClass("bg-success");

    const errorMessage = screen.queryByText(/required/i);
    expect(errorMessage).toBeNull;
  });
  test("inValid input makes background red and shows error message", () => {
    render(
      <LoanAmount value={null} setValue={() => {}} setIsValid={() => {}} />
    );
    const loanAmount = screen.getByLabelText(/Loan Amount/);
    userEvent.clear(loanAmount);
    userEvent.type(loanAmount, "w");
    userEvent.tab();
    expect(loanAmount).toHaveValue(null);
    expect(loanAmount).toHaveClass("bg-danger");

    const errorMessage = screen.getByText(/required/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
