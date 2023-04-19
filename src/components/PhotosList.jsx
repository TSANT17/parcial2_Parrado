import React from "react";
import "./PhotosList.css";

export const PhotosList = ({ photos }) => {
  return (
    <div
      className="photosContainer"
    >
      {photos.map((photo) => (
        <div className="photoList" key={photo.id}>
          <p className="photoText">
            {photo.title}
          </p>
          <img style={{ width: 100 }} src={photo.url} alt="" />
        </div>
      ))}
    </div>
  );
};
