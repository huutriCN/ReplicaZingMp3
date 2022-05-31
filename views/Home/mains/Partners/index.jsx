// hooks
import useSelect from "@/hooks/useSelect";
// actions
import { fetchPartners } from "@/redux/actions/Partners.action";
/// mocks
import data from "@/mocks/Partners";
// others
import styles from "./styles.module.scss";

const Partners = () => {
  const partners = useSelect(
    fetchPartners,
    (state) => state.partnersReducer.partners,
    data,
  );

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
