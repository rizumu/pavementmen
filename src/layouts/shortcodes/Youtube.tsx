import React from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  rest: any;
}) => {
  return (
    <div className="my-4 aspect-video overflow-hidden rounded-2xl">
      <LiteYouTubeEmbed
        wrapperClass="yt-lite rounded-lg"
        id={id}
        title={title}
        {...rest}
      />
    </div>
  );
};

export default Youtube;
