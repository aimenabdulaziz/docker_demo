import React from 'react';
import useStore from '../store';
import VideoListItem from './video_list_item';

function VideoList(props) {
  const videos = useStore(({ videoSlice }) => (videoSlice.list));
  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
}

export default VideoList;
