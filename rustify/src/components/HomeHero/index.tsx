import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomeHero(): JSX.Element {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col col--8 margin-vert--xl">
            <a
              href="https://chat.whatsapp.com/KwukBvkzcfW3BBXAOemMT9"
              target="_blank"
              rel="noreferrer"
              className={styles.callout}
            >
              <span className="badge badge--primary callout__badge">NEW</span>
              <span className={styles.callout__text}>
                Join Our Communities!
              </span>
              <p>👉🏿</p>
            </a>
            <h1 className={styles.slogan}>
              <span>Learn Using Simplified</span>
              <span className={styles.slogan__highlight}>Rust Tutorials</span>
            </h1>
            <p className={styles.description}>
              We have a collection of code examples, tutorials, and best
              practices that will help you master Rust programming and become a
              proficient Rust developer.
            </p>
            <div className="padding-vert--md row">
              <div className="col col--5">
                <a
                  href="/docs/intro"
                  className="button button--lg button--block button--primary"
                >
                  Get Started
                </a>
              </div>
              <div className="col col--5">
                <a
                  href="/blog"
                  className={clsx(
                    "button button--lg button--block button--outline button--secondary",
                    styles.command
                  )}
                >
                  <span className={styles.command__text}>
                    <span aria-hidden="true">Our blog</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.illustration}>
              <div
                className={styles.illustration__container}
                // style={{
                //   backgroundImage:
                //     'url("/images/background/blob-lerna-vertical.svg")',
                // }}
              >
                {/* TODO: make illustration with mid-journey */}
                <img
                  src="/img/muscat.png"
                  alt="image"
                  style={{ width: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
