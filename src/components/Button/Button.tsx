import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "contained" | "outlined";
}

export const Button: FC<Props> = ({ variant, ...props }) => (
  <button
    className={classNames(styles.btn, {
      [styles.contained]: variant === "contained",
      [styles.outlined]: variant === "outlined",
    })}
    {...props}
  />
);
