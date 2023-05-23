import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";

const TITLE = translate({ message: "Docusaurus Site Showcase" });
const DESCRIPTION = translate({
  message: "List of websites people are building with Docusaurus",
});
// https://www.lightgalleryjs.com/docs/react/
const Gallery: React.FC = () => {
  return (
    <Layout>
      <section className="gallery">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80">
            <img
              alt="img1"
              src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80">
            <img
              alt="img2"
              src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
        </LightGallery>
      </section>
    </Layout>
  );
};

export default Gallery;
