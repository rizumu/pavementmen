import React from "react";

const LiteYouTubeEmbed = dynamic(
  () => import('react-lite-youtube-embed').then((m) => m.default),
  { ssr: false },
)

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
