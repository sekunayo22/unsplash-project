import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import Button from "../Button/Button";
import { styles } from "./styles";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerButtonGroup}>
        <Button variant="primary" type="button" label="Home" />
        <Button variant="secondary" type="button" label="Collections" />
      </div>
    </header>
  );
};

export default Header;
