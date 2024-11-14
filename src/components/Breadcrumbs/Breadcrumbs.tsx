import useBreadcrumbs from "use-react-router-breadcrumbs";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className={styles["breadcrumb"]}>
      {breadcrumbs.map(({ breadcrumb }, index) => (
        <span
          className={styles["breadcrumb-item"]}
          key={`${breadcrumb}-${index}`}
        >
          {breadcrumb}
        </span>
      ))}
    </div>
  );
};
