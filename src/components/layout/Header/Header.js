import { useMediaQuery } from "react-responsive";
import Container from "../Container/Container";
import styles from "./Header.module.css";

const Header = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px" });
  const image = isMobile ? props.mobileImage : props.desktopImage;
  return (
    <div className={image ? styles["image-header"] : styles["text-header"]}>
      <Container>
        <div className={styles.text}>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
        {image && <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />}
      </Container>
    </div>
  );
};
export default Header;
