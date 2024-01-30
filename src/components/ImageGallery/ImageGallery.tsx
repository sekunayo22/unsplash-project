import React, { useMemo } from "react";
import { data } from "../../mock/data";
import { styles } from "./styles";

const ImageGallery = () => {
  const photos = useMemo(() => {
    const chunkSize = 4;
    let photoArray = [];
    for (let i = 0; i < data?.photos?.length; i += chunkSize) {
      const chunk = data?.photos?.slice(i, i + chunkSize);
      photoArray.push(chunk);
    }
    return photoArray;
  }, [data]);

  return (
    <div className={styles.searchResultPhotos}>
      {photos?.map((element) => {
        return (
          <div className={styles.searchResultPhotosColumn}>
            {element?.map((element, index) => {
              return (
                <div className={styles.searchResultImage}>
                  <img
                    key={`image-${index + 1}`}
                    src={element.image}
                    alt="search-result"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
