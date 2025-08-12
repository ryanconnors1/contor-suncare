import React from "react";

export default function HeadlineImage() {
  return (
    <div id="headline-image" className="w-full h-[85vh]">
      <img
        src="headlineimage.jpg"
        alt="Headline"
        className="w-full h-full object-cover"
      />
    </div>
  );
}