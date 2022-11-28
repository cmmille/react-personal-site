import Container from "../../../components/layout/Container/Container";
import Skill from "../../../components/Skill/Skill";

import styles from "./Skills.module.css";

import plantIcon from "../../../assets/images/plant.png";
import cpuIcon from "../../../assets/images/computer.png";
import birdIcon from "../../../assets/images/bird.png";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <Container>
        <Skill title="Plant Biology" icon={plantIcon}>
          <p>
            I am interested in the evolutionary relationships in plants. For my
            M.S. thesis, I studied the reproductive barriers in wild tomato
            species. I am experienced with a wide array of molecular techniques
            including RNAseq, Western Blots, Flow Cytometry, and more.
          </p>
        </Skill>
        <Skill title="Software Engineering" icon={cpuIcon}>
          <p>
            Computers have been an important part of my life since I first
            started modding computer games as a kid. In school, I first learned
            Python, R, and the Unix command line to process data and run
            statistics. At Colorado State University, I took on the role of
            frontend developer for my lab's MS Access Database. I recently
            earned my Certificate of Computer Programming and completed a Web
            Development Bootcamp online. I am currently working as a Software
            Engineer for the Providence Molecular Genomics Lab.
          </p>
          <p>
            I am comfortable working with a wide variety of platforms and
            languages from Visual Basic to Java to Web Development
            (HTML/CSS/JavaScript) I have worked with an assortment of platforms
            and frameworks including React.js, Node.js, and Ruby on Rails.
          </p>
          <p>
            See my work on{" "}
            <a
              href="https://github.com/cmmille"
              target="_blank"
              rel="noreferrer"
            >
              Github.
            </a>
          </p>
          <p>
            A selection of my work can also be viewed{" "}
            <Link to="./apps">here.</Link>
          </p>
        </Skill>
        <Skill title="Wildlife Photography" icon={birdIcon}>
          <p>
            My wife and I are avid bird watchers. With a pair of binoculars and
            my camera in hand, we love hiking around in search of new feathery
            friends.
          </p>
          <p>
            I currently shoot with a Canon Rebel T7i using the Sigma 150-600mm
            f/5.6-6.3 Contemporary lens.
          </p>
          <p>
            See my work on{" "}
            <a href="https://adobe.ly/2N78YOL" target="_blank" rel="noreferrer">
              Adobe.
            </a>
          </p>
        </Skill>
      </Container>
    </div>
  );
};
export default Skills;
