import Card from "../Card/Card";

import styles from "./Skill.module.css";

const Skill = (props) => {
  return (
    <Card className={styles.skill}>
      <img src={props.icon} alt={props.alt} />
      <div className={styles.text}>
        <h2>{props.title}</h2>
        <hr />
        {props.children}
      </div>
    </Card>
  );
};
export default Skill;
