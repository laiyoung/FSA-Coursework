function ImageDisplay({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} style={{ maxWidth: "100%", maxHeight: "500px" }} />
    </div>
  );
}

export default ImageDisplay;
