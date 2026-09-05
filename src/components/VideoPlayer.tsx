import { useEffect, useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <div ref={containerRef} className={`video-player ${className}`.trim()}>
      {isVisible && (
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="video-player-embed"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
