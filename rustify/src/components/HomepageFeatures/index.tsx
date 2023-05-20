import React from "react";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  bgColor: string;
};

// svgs from: https://storyset.com/illustration
const FeatureList: FeatureItem[] = [
  {
    title: "Easy Learning Curve",
    Svg: require("@site/static/img/feature-svgs/learning.svg").default,
    description:
      "Experience a smooth learning curve with Rust's user-friendly syntax and well-structured documentation. Get up to speed quickly and start building robust applications in no time",
    bgColor: "",
  },
  {
    title: "Exhilarating Community",
    Svg: require("@site/static/img/feature-svgs/community.svg").default,
    description:
      "Join a vibrant and supportive community of Rustaceans, where you can seek guidance, collaborate on projects, and share knowledge. Benefit from the collective wisdom and grow together",
    bgColor: "#0f2b34",
  },

  {
    title: "Open-Source Ecosystem",
    Svg: require("@site/static/img/feature-svgs/open-source.svg").default,
    description:
      "Immerse yourself in an extensive open-source ecosystem with a wide range of libraries and frameworks. Leverage existing tools and contribute to exciting projects, fostering innovation and collaboration",
    bgColor: "#0f2b34",
  },
  {
    title: "Opportunity to Network",
    Svg: require("@site/static/img/feature-svgs/network.svg").default,
    description:
      "Connect with a vibrant network of Rust developers, fostering valuable connections with seasoned professionals, potential mentors, and fellow enthusiasts. Expand your horizons and seize new opportunities",
    bgColor: "",
  },
];

function Feature({ title, Svg, description, bgColor }: FeatureItem) {
  return (
    <div
      className={styles.cardsGroupSection}
      style={{ backgroundColor: bgColor }}
    >
      <strong>
        <Translate>It&apos;s an</Translate>
      </strong>
      <div className={styles.title}>
        <p>
          <Translate>{title}</Translate>
        </p>
      </div>
      <p className={styles.detail}>
        <Translate>{description}</Translate>
      </p>
      <div className={styles.icon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

// https://github.dev/nocalhost/nocalhost.github.io
export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.cardsGroupContainer}>
      <div className={styles.cardsGroup}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
