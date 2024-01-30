import { css, cx } from "@emotion/css";
import React from "react";
import { typography } from "../../styles/typography";
import { styles } from "./styles";

interface PhotoCardProps {
  image: string;
  heading: string;
  count: number;
}

const PhotoCard = ({ image, heading, count }: PhotoCardProps) => {
  return (
    <div className={styles.photoCard}>
      <div className={styles.photoCardImage}>
        <img src={image} alt="card"></img>
      </div>
      <h4
        className={cx(
          typography.largeDescription,
          css({ marginBottom: "8px" }),
        )}
      >
        {heading}
      </h4>
      <p className={typography.small}>{count} photos</p>
    </div>
  );
};

export default PhotoCard;
