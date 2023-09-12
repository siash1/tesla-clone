const ImageBackgroundNoText = ({ backgroundImage }) => {
  return (
    <div
      className="image-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default ImageBackgroundNoText;
