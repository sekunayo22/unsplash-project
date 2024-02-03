import { css, cx } from "@emotion/css";
import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import { ReactComponent as Download } from "../../assets/icons/down-arrow.svg";
import { typography } from "../../styles/typography";
import { styles } from "./styles";
import PhotoListItem from "../../components/PhotoListItem/PhotoListItem";

function ImageDetails() {
  return (
    <div className={styles.imageDetails}>
      <Header />
      <main className={styles.imageDetailsContainer}>
        <div className={styles.imageDetailsBackground}></div>
        <div>
          <div className={styles.imageDetailsProfile}>
            <div className={styles.imageDetailsProfileImage}></div>
            <h5 className={typography.description}>Michael Baccin</h5>
          </div>
          <p className={typography.small02}>Published on October 31, 2022</p>
          <div
            className={css({
              display: "flex",
              gap: "20px",
              marginTop: "24px",
            })}
          >
            <Button
              leadingContent={<Plus />}
              type="button"
              variant="primary"
              label="Add to Collection"
            />
            <Button
              leadingContent={<Download />}
              type="button"
              variant="primary"
              label="Download"
            />
          </div>
          <div
            className={css({
              marginTop: "48px",
            })}
          >
            <h4
              className={cx(
                typography.largeDescription,
                css({ fontSize: "1.5rem" }),
              )}
            >
              Collections
            </h4>
            <div className={styles.imageDetailsList}>
              <PhotoListItem />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ImageDetails;
