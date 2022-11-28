import Card from "../../../../components/Card/Card";

import styles from "./AppCard.module.css";

const AppCard = (props) => {
  return (
    <Card className={styles["app-card"]}>
      <div className={props.text}>
        <a href={props.link} target="_blank" rel="noreferrer">
          <h2>{props.title}</h2>
        </a>
        <hr />
        <p>{props.description}</p>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img alt="site preview" src={props.image} />
      </a>
    </Card>
  );
};
export default AppCard;
