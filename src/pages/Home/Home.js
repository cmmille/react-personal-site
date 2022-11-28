import Header from "../../components/layout/Header/Header";
import Skills from "./Skills/Skills";

import juncoImage from "../../assets/images/junco.jpg";
import siskinImage from "../../assets/images/siskin.jpg";

const Home = () => {
  return (
    <>
      <Header
        title="Chris Lockfeld"
        subtitle="plant biologist, software developer, wildlife photographer"
        desktopImage={juncoImage}
        mobileImage={siskinImage}
        imgAlt="bird in snow"
      />
      <Skills />
    </>
  );
};
export default Home;
