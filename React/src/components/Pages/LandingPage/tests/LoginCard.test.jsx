import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MainStore from "../../../../store/MainStore";
import LoginCard from "../LoginCard";

describe("Testing for Login Card", () => {
  test("initial state of loginCard", () => {
    render(
      <Provider store={MainStore}>
        <LoginCard />
      </Provider>
    );

    //username is empty
    const usernameInput = screen.getByPlaceholderText(/username/i);
    expect(usernameInput).toHaveTextContent("");

    //password is empty
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toHaveTextContent("");
  });
});
