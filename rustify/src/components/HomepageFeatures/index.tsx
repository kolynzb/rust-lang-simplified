import React from "react";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  bgColor: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description:
      "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
    bgColor: "#",
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description:
      "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
    bgColor: "#0f2b34",
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description:
      "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
    bgColor: "#0f2b34",
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description:
      "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
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
        <Translate>It&apos;s a</Translate>
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
