// libs
// eslint-disable-next-line import/no-extraneous-dependencies
import { act, renderHook } from "@testing-library/react-hooks";
// hooks
import usePagination from "./usePagination";

describe("Test Pagination", () => {
  it("has valid Total", () => {
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

    const { start, end } = result.current;

    // assertion
    expect(start).toEqual(0);
    expect(end).toEqual(10);
  });

  it("has invalid TotalItem", () => {
    // arrange
    const itemPerPage = 10;

    // act
    const { result } = renderHook(() =>
      usePagination({
        itemPerPage,
        isHover: false,
      }),
    );

    const { start, end } = result.current;

    // assertion
    expect(start).toEqual(undefined);
    expect(end).toEqual(undefined);
  });

  it("has invalid ItemPerPage", () => {
    // arrange
    const total = 50;

    // act
    const { result } = renderHook(() =>
      usePagination({
        total,
        isHover: false,
      }),
    );

    const { start, end } = result.current;

    // assertion
    expect(start).toEqual(undefined);
    expect(end).toEqual(undefined);
  });

  it("has valid result after increasing currentPage", () => {
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

    const { start, end } = result.current;

    // assertion
    expect(start).toEqual(10);
    expect(end).toEqual(20);
  });

  it("has invalid SetCurrentPage", () => {
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

    const { start, end } = result.current;

    // assertion
    expect(start).toEqual(40);
    expect(end).toEqual(50);
  });

  it("has undefined SetCurrentPage", () => {
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

    const { start, end } = result.current;

    // assertion
    expect(start).toEqual(0);
    expect(end).toEqual(10);
  });
});
