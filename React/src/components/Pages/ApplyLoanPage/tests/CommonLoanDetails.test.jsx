import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CommonLoanDetails from "../CommonLoanDetails";
import MainStore from "../../../../store/MainStore";

describe("CommonLoanDetails", () => {
  test("Renders Loan Type", () => {
    render(
      <Provider store={MainStore}>
        <CommonLoanDetails></CommonLoanDetails>);
      </Provider>
    );
    const loanType = screen.getByLabelText(/loan type/i);
    expect(loanType).toBeInTheDocument();
  });
});
