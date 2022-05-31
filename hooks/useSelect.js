// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useSelect = (action, selector, data = {}) => {
  const dispatch = useDispatch();
  const result = useSelector(selector);

  useEffect(() => {
    dispatch(action(data));
  }, []);

  return result;
};

export default useSelect;
