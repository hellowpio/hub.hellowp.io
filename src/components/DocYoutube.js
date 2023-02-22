import React from "react";

const DocYoutube = ({ video }) => {
  // Extract the video ID from the URL
  const videoId = video.split("v=")[1];
  // If the link contains additional parameters, remove them from the video ID
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  // Create the embed code for the YouTube video based on the video ID
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="doc-youtube-wrapper">
      <iframe
        className="doc-youtube-embed"
        src={embedUrl}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DocYoutube;
