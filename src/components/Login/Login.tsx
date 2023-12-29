import { useTranslation } from "react-i18next";
import { images } from "../../assets";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { Button } from "../Button";

export const LoginComponent = () => {
  const [t] = useTranslation("global");

  return (
    <section className={styles.login}>
      <div className={styles.sidebar}>
        <img src={images.logoWithText} alt="logo with text" />
      </div>
      <form className={styles.form}>
        <h1>{t("login")}</h1>
        <p>
          <span>{t("don't have an account yet?")}</span>
          <Link to={Routes.Register}>{t("register")}</Link>
          <Button variant="contained">{t("login")}</Button>
        </p>
      </form>
    </section>
  );
};
