// libs
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render, screen } from "@testing-library/react";
// context
import Provider from "../../utils/TestProvider";
// components
import Navbar from "./index";

describe("Tests with Navbar", () => {
  it("should change to English", () => {
    render(
      <Provider>
        <Navbar />
      </Provider>,
    );
    // arrange
    const switchLang = screen.getByRole("switch");

    // act
    fireEvent.click(switchLang);
    const menu = screen.getByText("Personal Music");

    // assertstion
    expect(menu).toBeInTheDocument();
  });

  it("should change to Vietnamese", () => {
    render(
      <Provider>
        <Navbar />
      </Provider>,
    );
    // arrange
    const switchLang = screen.getByRole("switch");

    // act
    fireEvent.click(switchLang);
    const menu = screen.getByText("Nhạc Cá Nhân");

    // assertstion
    expect(menu).toBeInTheDocument();
  });
});
