import { css } from "@emotion/css";
import React from "react";
import Header from "../../components/Header/Header";

function ImageDetails() {
  return (
    <div
      className={css({
        height: "calc(100vh - 200px)",
        overflowY: "hidden",
      })}
    >
      <Header />
      <main
        className={css({
          margin: "50px auto",
          width: "95vw",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px",
        })}
      >
        <div
          className={css({
            backgroundColor: "red",
            width: "100%",
            height: "100%",
          })}
        ></div>
        <p>aaaa</p>
      </main>
    </div>
  );
}

export default ImageDetails;
