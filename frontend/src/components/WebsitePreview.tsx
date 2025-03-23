interface WebsitePreviewProps {
  screenshotBase64: string;
}

export default function WebsitePreview({
  screenshotBase64,
}: WebsitePreviewProps) {
  const convertToImage = (base64String: string) => {
    try {
      if (!base64String.includes("data:image")) {
        return `data:image/png;base64,${base64String}`;
      } else {
        return base64String;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <img
      src={convertToImage(screenshotBase64)}
      alt="Website Preview"
      className="h-auto w-1/2"
    />
  );
}
