import React from "react";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/scss/image-gallery.scss";
import "./Gallery.scss";

const Gallery = props => {
  const {
    images = [],
  } = props;

  if (!images.length) {
    return (
      <div className="gallery__no-photos">
        No photos
      </div>
    );
  }

  let imagesArr = images.map(imgObj => ({
    original: imgObj.url,
  }));

  return (
    <ImageGallery
      items={imagesArr}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
      showNav={false}
    />
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;