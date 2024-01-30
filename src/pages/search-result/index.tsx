import { css } from "@emotion/css";
import React from "react";
import Header from "../../components/Header/Header";
import SearchInput from "../../components/SearchInput/SearchInput";
import { styles } from "./styles";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

function SearchResult() {
  return (
    <div>
      <Header />
      <div className={styles.searchResultBackground}>
        <div className={styles.searchResultBackgroundContainer}>
          <SearchInput
            placeHolderText="Enter keywords..."
            value="ks"
            onSubmit={() => console.log("sjisi")}
            onValueChange={() => console.log("kskksk")}
            className={css({ width: "40vw" })}
          />
        </div>
      </div>
      <main className={styles.searchResultPhotoContainer}>
        <ImageGallery />
      </main>
    </div>
  );
}

export default SearchResult;
