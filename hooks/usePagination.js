// libs
import { useEffect, useState } from "react";
// const
import KEYCODE from "../constants/KeyCode";

const usePagination = ({ total, itemPerPage, isHover }) => {
  const [currentPage, setCurrentPage] = useState(1);

  let start;
  let end;
  if (total && itemPerPage) {
    start = (currentPage - 1) * itemPerPage;
    end = (currentPage - 1) * itemPerPage + itemPerPage;
  }

  const onHandleChange = (page) => {
    if (!Number.isNaN(page)) {
      if (page > total / itemPerPage) {
        setCurrentPage(total / itemPerPage);
      } else {
        setCurrentPage(page);
      }
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === KEYCODE.PageUp) {
        e.preventDefault();

        if (currentPage < total / itemPerPage) {
          setCurrentPage((cur) => cur + 1);
        }
      } else if (e.keyCode === KEYCODE.PageDown) {
        e.preventDefault();

        if (currentPage > 1) {
          setCurrentPage((cur) => cur - 1);
        }
      }
    };

    if (typeof window === "object") {
      if (isHover) window.addEventListener("keydown", handleKey);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentPage, isHover, itemPerPage, total]);

  return { currentPage, onHandleChange, start, end };
};

export default usePagination;
