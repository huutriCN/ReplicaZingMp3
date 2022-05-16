// libs
import { useEffect, useState } from "react";

// KeyCode
const keyCode = {
  next: 33,
  previous: 34,
};

const usePagination = ({ total, itemPerPage, isHover }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleKey = (e) => {
    if (e.keyCode === keyCode.next) {
      e.preventDefault();

      if (currentPage < total / itemPerPage) {
        setCurrentPage((cur) => cur + 1);
      }
    } else if (e.keyCode === keyCode.previous) {
      e.preventDefault();

      if (currentPage > 1) {
        setCurrentPage((cur) => cur - 1);
      }
    }
  };

  const onHandleChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (isHover) window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentPage, isHover]);

  return { currentPage, onHandleChange };
};

export default usePagination;
