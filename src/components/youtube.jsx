import React, { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import useStore from '../store';

function YouTube(props) {
  const setVideos = useStore(({ videoSlice }) => videoSlice.setVideos);
  const undo = useStore((state) => state.videoSlice.undo);
  const redo = useStore((state) => state.videoSlice.redo);

  const search = (text) => {
    youtubeSearch(text).then((videos) => {
      setVideos(videos);
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    search('pixar');
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
        <SearchBar onSearchChange={debouncedSearch} />
        <div className="btn-div">
          <button type="button" onClick={undo} className="undo-btn">Undo</button>
          <button type="button" onClick={redo} className="redo-btn">Redo</button>
        </div>
      </div>
      <div id="video-section">
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}

export default YouTube;
