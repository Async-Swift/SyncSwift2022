import HeadMeta from "./components/HeadMeta";
import Header from "./components/Header";
import Onboarding from "./Onboarding/Onboarding";
import Info from "./components/Info";

import style from "../styles/modules/BackgroundImage.module.css";

const Home = () => {
  return (
    <>
      <HeadMeta />

      <main>
        <Header></Header>
        <Onboarding></Onboarding>
        {/* <Info></Info> */}
      </main>
    </>
  );
};

export default Home;
