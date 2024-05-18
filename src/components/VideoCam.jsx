const VideoCam = ({ streamUrl }) => {
  return (
    <div className="video-stream-container">
      <video src={streamUrl} controls autoPlay width="100%" height="500px">
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCam;
