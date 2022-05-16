// libs
import { Switch } from "antd";
import { useEffect, useState } from "react";
import { useLocale } from "../../../../contexts/LocaleContext";
// Data Recource
import navbar from "../../../../dataSources/Navbar";
// others
import styles from "./styles.module.scss";

const NavbarButtons = () => {
  const [currentState, setCurrentState] = useState();

  const { locale, setLocale } = useLocale();

  useEffect(() => {
    if (locale === navbar.langItem.langChecked) {
      setCurrentState(true);
    } else {
      setCurrentState(false);
    }
  }, [locale]);

  const handleChange = (check) => {
    if (check) {
      setLocale(navbar.langItem.langChecked);
    } else {
      setLocale(navbar.langItem.langUnchecked);
    }
  };

  return (
    <div className={styles["buttons-wrapper"]}>
      <Switch
        checkedChildren={navbar.langItem.langChecked}
        unCheckedChildren={navbar.langItem.langUnchecked}
        onChange={handleChange}
        checked={currentState}
        className={styles["buttons-languages"]}
      />
    </div>
  );
};

export default NavbarButtons;
