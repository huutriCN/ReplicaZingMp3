// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchPartners } from "@/redux/actions/Partners.action";
/// mocks
import data from "@/mocks/Partners";
// others
import styles from "./styles.module.scss";

const Partners = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partnersReducer.partners);

  useEffect(() => {
    dispatch(fetchPartners(data));
  }, []);

  return (
    <div className={styles["partner-wrapper"]}>
      <div className={styles["partner-wrapper-inner"]}>
        <span className={styles["partner-title"]}>ĐỐI TÁC</span>
        <ul className={styles["partner-list"]}>
          {partners.map((partner) => (
            <li key={partner.thumbnail}>
              <img src={partner.thumbnail} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Partners;
