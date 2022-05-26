// libs
// eslint-disable-next-line import/no-extraneous-dependencies
import { act, renderHook } from "@testing-library/react-hooks";
// hooks
import usePagination from "./usePagination";

describe("Test Pagination", () => {
  it("should return valid result", () => {
    // arrange
    const total = 50;
    const itemPerPage = 10;

    // act
    const { result } = renderHook(() =>
      usePagination({
        total,
        itemPerPage,
        isHover: false,
      }),
    );

    // assertion
    expect(result.current.start).toEqual(0);
    expect(result.current.end).toEqual(10);
  });

  it("should return undifined", () => {
    // arrange
    const itemPerPage = 10;

    // act
    const { result } = renderHook(() =>
      usePagination({
        itemPerPage,
        isHover: false,
      }),
    );

    // assertion
    expect(result.current.start).toEqual(undefined);
    expect(result.current.end).toEqual(undefined);
  });

  it("should return undifined", () => {
    // arrange
    const total = 50;

    // act
    const { result } = renderHook(() =>
      usePagination({
        total,
        isHover: false,
      }),
    );

    // assertion
    expect(result.current.start).toEqual(undefined);
    expect(result.current.end).toEqual(undefined);
  });

  it("should move to next Page", () => {
    // arrange
    const total = 50;
    const itemPerPage = 10;

    // act
    const { result } = renderHook(() =>
      usePagination({
        total,
        itemPerPage,
        isHover: true,
      }),
    );

    act(() => {
      result.current.onHandleChange(result.current.currentPage + 1);
    });

    // assertion
    expect(result.current.start).toEqual(10);
    expect(result.current.end).toEqual(20);
  });

  it("should move to specific page", () => {
    // arrange
    const total = 50;
    const itemPerPage = 10;

    // act
    const { result } = renderHook(() =>
      usePagination({
        total,
        itemPerPage,
        isHover: true,
      }),
    );

    act(() => {
      result.current.onHandleChange(6);
    });

    // assertion
    expect(result.current.start).toEqual(40);
    expect(result.current.end).toEqual(50);
  });

  it("should not move to invalid page", () => {
    // arrange
    const total = 50;
    const itemPerPage = 10;

    // act
    const { result } = renderHook(() =>
      usePagination({
        total,
        itemPerPage,
        isHover: true,
      }),
    );

    act(() => {
      result.current.onHandleChange("Not a number");
    });

    // assertion
    expect(result.current.start).toEqual(0);
    expect(result.current.end).toEqual(10);
  });
});
