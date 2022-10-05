import { NavLink } from "react-router-dom";

import styles from "./header.module.scss";

const linkClassName = ({ isActive }) =>
  isActive ? styles.activeLink : styles.inActiveLink;

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNavBlock}>
        <NavLink className={linkClassName} end to="/">
          Dictionary
        </NavLink>
        <NavLink className={linkClassName} to="add-word">
          Add New Word
        </NavLink>
        <NavLink className={linkClassName} end to="testing">
          Knowledge Test
        </NavLink>
        <NavLink className={linkClassName} to="tests-history">
          Testing History
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
