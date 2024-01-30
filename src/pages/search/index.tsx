import { css, cx } from "@emotion/css";
import React from "react";
import Header from "../../components/Header/Header";
import SearchInput from "../../components/SearchInput/SearchInput";
import { typography } from "../../styles/typography";
import { styles } from "./styles";

function Search() {
  return (
    <div className={styles.searchPage}>
      <Header />
      <main className={styles.searchPageMainContent}>
        <h3 className={cx(typography.title)}>Search</h3>
        <p className={cx(typography.largeDescription02)}>
          Search high-resolution images from Unsplash
        </p>
        <SearchInput
          placeHolderText="Enter keywords..."
          value="ks"
          onSubmit={() => console.log("sjisi")}
          onValueChange={() => console.log("kskksk")}
          className={css({
            width: "40vw",
          })}
        />
      </main>
    </div>
  );
}

export default Search;
