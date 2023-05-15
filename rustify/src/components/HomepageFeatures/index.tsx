import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Feature2({ title, Svg, description }: FeatureItem) {
  return (
    <div className={styles.cardsGroupContainer}>
      <div className={styles.cardsGroup}>
        <div className={styles.cardsGroupSection}>
          <strong>
            <Translate>It&apos;s a</Translate>
          </strong>
          <div className={styles.title}>
            <p>
              <Translate>Bridge between Cloud and IDE</Translate>
            </p>
          </div>
          <p className={styles.detail}>
            <Translate>
              Code changes can instantly synchronize from IDE to cloud, see
              changes under seconds, without image commit, push or pull cycles.
            </Translate>
          </p>
          <div className={styles.icon}>
            <img src="img/home/section2-images-1.png"></img>
          </div>
        </div>
        <div
          className={styles.cardsGroupSection}
          style={{ backgroundColor: "#0f2b34" }}
        >
          <strong>
            <Translate>It&apos;s a</Translate>
          </strong>
          <div className={styles.title}>
            <p>
              <Translate>Space to Share Dev Environment</Translate>
            </p>
          </div>
          <p className={styles.detail}>
            <Translate>
              Developers can share the same development environment across the
              team, enjoying team collaboration.
            </Translate>
          </p>
          <div className={styles.icon}>
            <img src="img/home/section2-images-2.png"></img>
          </div>
        </div>
        <div
          className={styles.cardsGroupSection}
          style={{ backgroundColor: "#0f2b34" }}
        >
          <strong>
            <Translate>It&apos;s a</Translate>
          </strong>
          <div className={styles.title}>
            <p>
              <Translate>Extension Toolsets of Kubernetes</Translate>
            </p>
          </div>
          <p className={styles.detail}>
            <Translate>
              Nocalhost can help developers to build Kubernetes applications
              much easier and faster.
            </Translate>
          </p>
          <div className={styles.icon}>
            <img src="img/home/section2-images-3.png"></img>
          </div>
        </div>
        <div
          className={clsx(styles.cardsGroupSection3, styles.cardsGroupSection)}
          style={{ backgroundColor: "#fff" }}
        >
          <strong>
            <Translate>It&apos;s a</Translate>
          </strong>
          <div className={styles.title}>
            <p>
              <Translate>Spotlight On Explore MicroServices</Translate>
            </p>
          </div>
          <p className={styles.detail}>
            <Translate>
              Developers can directly develop and debug remote designated
              microservices under the complex framework through Nocalhost.
            </Translate>
          </p>
          <div className={styles.icon}>
            <img src="img/home/section2-images-4.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://github.dev/nocalhost/nocalhost.github.io
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
