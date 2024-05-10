import React from 'react';
import useStore from '../store';

function VideoDetail() {
  const video = useStore((state) => state.videoSlice.selected);

  if (!video) {
    return <div>Loading...</div>;
  }

  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="youtube detail" className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
}

export default VideoDetail;
