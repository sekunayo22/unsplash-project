import { css } from "@emotion/css";
import React from "react";
import Header from "../../components/Header/Header";
import SearchInput from "../../components/SearchInput/SearchInput";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import { styles } from "./styles";
import { typography } from "../../styles/typography";

function CollectionPhotos() {
  return (
    <div>
      <Header />
      <div className={styles.collectionPhotosHeader}>
        <h4 className={typography.title}>Autumn Vibe</h4>
        <p className={typography.largeDescription02}>16 photos</p>
      </div>
      <main className={styles.collectionPhotosContainer}>
        <ImageGallery />
      </main>
    </div>
  );
}

export default CollectionPhotos;
