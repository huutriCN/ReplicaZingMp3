// libs
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render, screen } from "@testing-library/react";
// context
import Provider from "../../utils/TestProvider";
// components
import Navbar from "./index";
// locales
import "@/locales/index";

jest.mock("@/locales/index", () => {
  const vi = {
    "Navbar.menu.PersonalMusic": "Nhạc của tui",
    "Navbar.menu.chart": "#zingChart",
    "Navbar.menu.Top100": "Top 100",
    "Navbar.menu.Topic": "Chủ Đề",
    "Navbar.menu.Video": "Video",
    "Navbar.menu.Album": "Album",
    "Navbar.menu.Artist": "Nghệ sĩ",
    "Navbar.menu.VIP": "VIP",
  };

  const en = {
    "Navbar.menu.PersonalMusic": "My Music",
    "Navbar.menu.chart": "#zingChart",
    "Navbar.menu.Top100": "Top 100",
    "Navbar.menu.Topic": "Topic",
    "Navbar.menu.Video": "Video",
    "Navbar.menu.Album": "Album",
    "Navbar.menu.Artist": "Artist",
    "Navbar.menu.VIP": "VIP",
  };

  return {
    en,
    vi,
  };
});

describe("Tests with Navbar", () => {
  // act
  it("should switch language", () => {
    render(
      <Provider>
        <Navbar />
      </Provider>,
    );
    fireEvent.click(screen.getByRole("switch"));

    // assertstion
    expect(screen.getByText("My Music")).toBeInTheDocument();

    // act
    fireEvent.click(screen.getByRole("switch"));

    // assertstion
    expect(screen.getByText("Nhạc của tui")).toBeInTheDocument();
  });
});
