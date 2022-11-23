import { NavLink } from "react-router-dom";

import Container from "../Container/Container";

import styles from "./NavBar.module.css";

const StyledLink = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? styles.selected : "")}
    >
      {props.children}
    </NavLink>
  );
};

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles["nav-menu"]}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/apps">Apps</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
export default NavBar;
