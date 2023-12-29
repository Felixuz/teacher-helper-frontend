import { useTranslation } from "react-i18next";
import { ArrowLeft, images } from "../../assets";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { Button } from "../Button";
import { BaseInput } from "../Inputs";
import { PhoneInput } from "../Inputs/PhoneInput/PhoneInput";
import { useState } from "react";

export const LoginComponent = () => {
  const [t] = useTranslation("global");

  const [phone, setPhone] = useState<string | undefined>();

  return (
    <section className={styles.login}>
      <div className={styles.sidebar}>
        {/* <img src={images.logoWithText} alt="logo with text" />
        <img src={images.businessDeal} alt="2 person dealing" /> */}
      </div>
      <form className={styles.form}>
        <h1>{t("login")}</h1>
        <p>
          <span>{t("don't have an account yet?")}</span>
          <Link to={Routes.Register}>{t("register")}</Link>
          <Button variant="contained" type="button">
            {t("login")}
          </Button>
          <Button variant="outlined" type="button">
            <ArrowLeft />
            {t("login")}
          </Button>
          <BaseInput placeholder={t("phone number")} label={t("login")} />
          <PhoneInput
            placeholder={t("phone number")}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </p>
      </form>
    </section>
  );
};
