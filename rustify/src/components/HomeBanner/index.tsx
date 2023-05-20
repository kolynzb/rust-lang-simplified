import React from "react";
import styles from "./styles.module.css";

import Translate from "@docusaurus/Translate";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <div className={styles.startBtnSection}>
      <div className={styles.bottomBanner}>
        <h3>
          <Translate>Lets unleash your inner Rustacean</Translate>
        </h3>
        <div className={styles.bigStartBtnBox}>
          <div className={styles.bigStartBtn}>
            <a href="/docs/">
              <Translate>Get Rusty </Translate>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
