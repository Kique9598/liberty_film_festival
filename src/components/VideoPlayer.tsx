type VideoPlayerProps = {
  videoId: string;
  title?: string;
  className?: string;
};

const VideoPlayer = ({
  videoId,
  title = "YouTube video player",
  className = "",
}: VideoPlayerProps) => {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <div className={`video-player ${className}`.trim()}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="video-player-embed"
      />
    </div>
  );
};

export default VideoPlayer;
