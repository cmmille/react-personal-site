import styles from "./Footer.module.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div class={styles["social-media"]}>
        <a
          href="https://www.facebook.com/zappingstar"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/thecmmiller/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/chris-miller-603b3b163/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/cmmille" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <h2>&copy; {year} by Chris Lockfeld</h2>
    </footer>
  );
};
export default Footer;
