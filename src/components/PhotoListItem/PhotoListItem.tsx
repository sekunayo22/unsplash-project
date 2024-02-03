import React from "react";
import Button from "../Button/Button";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import { ReactComponent as Remove } from "../../assets/icons/Remove.svg";
import { styles } from "./styles";
import { typography } from "../../styles/typography";
import { css } from "@emotion/css";

const PhotoListItem = () => {
  return (
    <div className={styles.photoListItem}>
      <div
        className={css({ display: "flex", gap: "16px", alignItems: "center" })}
      >
        <div className={styles.photoListItemImage}></div>
        <div>
          <h6 className={typography.largeDescription}>Lake</h6>
          <p className={typography.small02}>16 photos</p>
        </div>
      </div>
      <Button
        className={css({
          color: "#000",
        })}
        variant="text"
        leadingContent={<Remove />}
        type="button"
        label="Remove"
      />
    </div>
  );
};

export default PhotoListItem;
