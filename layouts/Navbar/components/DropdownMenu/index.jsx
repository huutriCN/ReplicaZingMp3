/// components
import classNames from "classnames";

// others
import styles from "./styles.module.scss";

const DropdownMenu = ({ columnList, className, id }) => (
  <div key={id} className={classNames(styles["menu-wrapper"], className)}>
    <div className={styles["menu-wrapper-inner"]}>
      {/* columns of menu */}
      {columnList.map((column) => (
        <div key={column.id} className={styles["column-wrapper"]}>
          {column.columnTitle && (
            <div className={styles["column-title"]}>{column.columnTitle}</div>
          )}
          {/* list items of columns */}
          <ul className={styles["menu-list"]}>
            {column.columnItems.map((row) => (
              <li key={row.id} className={styles["menu-item"]}>
                <a href={row.rowLink}>{row.rowText}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default DropdownMenu;
