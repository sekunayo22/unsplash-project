import { css, cx } from "@emotion/css";
import React from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { typography } from "../../styles/typography";
import { styles } from "./styles";

const Collections = () => {
  return (
    <div>
      <div className={styles.collectionsHeader}>
        <h4 className={typography.title}>Collections</h4>
        <p
          className={cx(
            typography.largeDescription02,
            css({ textAlign: "center", width: "35%", marginTop: "24px" }),
          )}
        >
          Explore the world through collections of beautiful photos free to use
          under the{" "}
          <a
            href=""
            className={css({ color: "black", textDecoration: "underline" })}
          >
            Unsplash License
          </a>
        </p>
      </div>
      <main className={styles.collectionsPhotosMain}>
        <PhotoCard image="" heading="Water" count={2} />
      </main>
    </div>
  );
};

export default Collections;
