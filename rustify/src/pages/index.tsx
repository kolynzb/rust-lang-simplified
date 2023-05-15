import React, { useEffect, useMemo } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import HomeHero from "../components/HomeHero";
import HomeBanner from "../components/HomeBanner";
import { useLocation } from "@docusaurus/router";
import useIsMobile from "../hooks/UseIsMobile";
import BrowserOnly from "@docusaurus/BrowserOnly";
import GitHubFloatingCTA from "../components/GitHubFloatingCTA";
import { GithubProvider } from "../context/GithubContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero ", styles.heroBanner)}>
      <HomeHero />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  const isMobile = useIsMobile();

  const showGithubCta = useMemo(() => {
    if (typeof window !== "undefined" && !isMobile) {
      if (location.pathname.startsWith("/blog")) {
        (window as Window & typeof globalThis & { Intercom?: any }).Intercom?.(
          "update",
          { hide_default_launcher: true }
        );
      } else {
        (window as Window & typeof globalThis & { Intercom?: any }).Intercom?.(
          "update",
          { hide_default_launcher: false }
        );
      }
    }

    if (location.pathname.startsWith("/docs")) {
      return false;
    }

    return true;
  }, [location, isMobile]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Simplifying Rust For All"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomeBanner />
      </main>
      <GithubProvider>
        {showGithubCta && (
          <BrowserOnly>{() => <GitHubFloatingCTA />}</BrowserOnly>
        )}
      </GithubProvider>
    </Layout>
  );
}
