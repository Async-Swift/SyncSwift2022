import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

// import onboardingScript from "./OnboardingScript.js";
import styles from "../../styles/modules/Onboarding.module.css";
import birdImage from "../../public/birds/s1.svg";
import HBackground from "../../public/birds/hBG.svg";
import VBackground from "../../public/birds/vBG.svg";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Onboarding = () => {
  return (
    <section className={styles.onboarding}>
      <main>
        <div className={styles.info}>
          <h1>Nesting</h1>
          <h4>
            SyncSwift 2022
            <br />
            둥지를 틀다
          </h4>
        </div>
        <article></article>
      </main>
    </section>
  );
};

export default Onboarding;
