import React from "react";
import Heading from "@theme/Heading";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { TbUpload } from "react-icons/tb";

const TITLE = translate({ message: "Community Gallery" });
const DESCRIPTION = translate({
  message: "Images From Our Community",
});

const Gallery: React.FC = () => {
  return (
    <Layout>
      <section className="margin-top--lg margin-bottom--lg text--center">
        <Heading as="h1">{TITLE}</Heading>
        <p>{DESCRIPTION}</p>
        <section className="gallery">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            autoplay={true}
          >
            <a href="https://source.unsplash.com/1600x900/?hackathon,ideas,community,people,technology,conference">
              <img
                alt="community1"
                className={styles.gallery__img}
                src="https://source.unsplash.com/1600x900/?hackathon,ideas,community,people,technology,conference"
              />
            </a>
            <a href="https://source.unsplash.com/1600x900/?community,people,technology,conference">
              <img
                className={styles.gallery__img}
                alt="community2"
                src="https://source.unsplash.com/1600x900/?community,technology,conference"
              />
            </a>
            <a href="https://source.unsplash.com/1600x900/?hackathon,ideas,technology,conference">
              <img
                alt="community1"
                className={styles.gallery__img}
                src="https://source.unsplash.com/1600x900/?hackathon,ideas,technology,conference"
              />
            </a>
            <a href="https://source.unsplash.com/1600x900/?community,people,technology,conference">
              <img
                className={styles.gallery__img}
                alt="community2"
                src="https://source.unsplash.com/1600x900/?community,people,technology,conference"
              />
            </a>
          </LightGallery>
        </section>

        <button title="Submit Image" className={styles.submit_img__btn}>
          <TbUpload size={24} color="white" />
        </button>
      </section>
    </Layout>
  );
};

export default Gallery;

// https://www.lightgalleryjs.com/docs/react/
