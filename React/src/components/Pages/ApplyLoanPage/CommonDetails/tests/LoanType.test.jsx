import { render, screen, cleanup } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import LoanType from "../LoanType";

const setup = () => {
  return render(<LoanType />);
};

afterEach(cleanup);

describe("Loan Type", () => {
  test("renders", () => {
    setup();
    const loanType = screen.getByLabelText(/loan type/i);
    expect(loanType).toBeInTheDocument();
  });
  test("has 3 options 1-select 2-other", () => {
    setup();
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
  });
  test("initial value is ' ' ", () => {
    setup();
    const loanType = screen.getByLabelText(/loan type/i);
    expect(loanType).toHaveValue(" ");
  });
  //   test("can select an option", () => {
  //     setup();
  //     const loanType = screen.getByLabelText(/loan type/i);
  //     userEvent.click(loanType);
  //     // const option = screen.getByText(/education/i);
  //     userEvent.clear(loanType);
  //     userEvent.type(loanType, "ed");
  //     expect(loanType).toHaveValue("Education");
  //   });
});
