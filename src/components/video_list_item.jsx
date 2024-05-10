import React from 'react';
import useStore from '../store';

function VideoListItem(props) {
  const selectVideo = useStore(({ videoSlice }) => videoSlice.selectVideo);
  const imgUrl = props?.video?.snippet?.thumbnails?.default?.url;

  return (
    <li onClick={() => selectVideo(props.video)}>
      <img src={imgUrl} alt="video" />
      <div>{props?.video?.snippet?.title}</div>
    </li>
  );
}

export default VideoListItem;
