import React, { FC, memo, useMemo, useState } from "react";
import { useGithubContext } from "../../context/GithubContext";
import GithubIcon from "../svgIcons/GithubIcon";
import CancelIcon from "../svgIcons/CancelIcon";
import styles from "./styles.module.css";

// https://github.com/refinedev/refine/
const GithubFloatingCta: FC = () => {
  const [isClosed, setIsClosed] = useState(
    localStorage.getItem("github-float-cta") === "true"
  );

  const { starCount, loading } = useGithubContext();

  const handleClose = () => {
    localStorage.setItem("github-float-cta", "true");
    setIsClosed(true);
  };

  const formattedStarCount = useMemo(() => {
    if (loading || !starCount) return "";

    return new Intl.NumberFormat().format(starCount);
  }, [starCount, loading]);

  if (isClosed) return null;
  return (
    <div className={styles.floatingCta}>
      <div className={styles.floatingCtaContent}>
        <div className={styles.floatingCtaText}>Star us on GitHub</div>
        <a
          className={styles.floatingCtaLink}
          href="https://github.com/kolynzb/rust-lang-simplified"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          <span>Star</span>
          <div className={styles.floatingCtaBadge}>
            <span>{formattedStarCount}</span>
          </div>
        </a>
      </div>
      <button className={styles.floatingCtaClose} onClick={handleClose}>
        <CancelIcon />
      </button>
    </div>
  );
};

export default memo(GithubFloatingCta);
