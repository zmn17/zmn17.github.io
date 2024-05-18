const VideoCam = ({ streamUrl }) => {
  return (
    <div className="video-stream-container">
      <iframe
        src={streamUrl}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
        title="Front Door Camera"
      ></iframe>
    </div>
  );
};

export default VideoCam;
