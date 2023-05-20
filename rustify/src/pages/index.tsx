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

    if (location.pathname.startsWith("/docs")) {
      return false;
    }

    return true;
  }, [location, isMobile]);

  return (
    <Layout
      title={`Home: ${siteConfig.title}`}
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
