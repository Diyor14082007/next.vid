import React, { useEffect, useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [tanlash, setTanlash] = useState(false);

  const startStream = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => videoRef.current.play();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const stopStream = () => {
    if (videoRef.current) {
      streamRef?.current?.getTracks().map((el) => el.stop());
    }
  };

  useEffect(() => {
    stopStream();
    if (tanlash) startStream();
  }, [tanlash]);
  return (
    <div>
      <div className="wrapper">
        <video
          style={{ display: tanlash ? "block" : "none" }}
          autoPlay
          muted
          playsInline
          ref={videoRef}
        ></video>
        <div className="controls">
          <button onClick={() => setTanlash(!tanlash)}>
            {tanlash ? "Off" : "On"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
