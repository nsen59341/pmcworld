export function YouTubeEmbed({
  src,
  title,
  className,
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen = true,
}: {
  src: string;
  title: string;
  className?: string;
  allow?: string;
  allowFullScreen?: boolean;
}) {
  return (
    <iframe
      width="100%"
      height="100%"
      className={className}
      src={src}
      title={title}
      allow={allow}
      allowFullScreen={allowFullScreen}
    />
  );
}
