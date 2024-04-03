import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SigIn from "../Components/SignIn";
import appStore from "../Store/appStore";
import userEvent from "@testing-library/user-event";
import logInData from "../mocks/loginData.json"

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <SigIn />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Sign in" });
  expect(loginButton).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <SigIn />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Sign in" });

  fireEvent.click(loginButton);
});

it('Login form', async () => {
    const submit = jest.fn();
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <SigIn />
          </Provider>
        </BrowserRouter>
      );
    
    const eMail = screen.getByPlaceholderText('Enter Email')
    const password = screen.getByPlaceholderText('Enter Password')
    userEvent.type(eMail, "eve.holt@reqres.in")
    userEvent.type(password, "pistol");
    expect(submit).toHaveBeenCalledWith(logInData);
})
