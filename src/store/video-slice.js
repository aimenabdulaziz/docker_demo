export default function createVideoSlice(set) {
  return {
    selected: null,
    list: [],
    history: [],
    historyIndex: -1,
    selectVideo: (video) => set(({ videoSlice: draftState }) => {
      draftState.selected = video;
      draftState.history = draftState.history.slice(0, draftState.historyIndex + 1).concat(video);
      draftState.historyIndex += 1;
    }, false, 'video/selectVideo'),
    setVideos: (videos) => set(({ videoSlice: draftState }) => {
      if (Array.isArray(videos) && videos.length > 0) {
        const [firstVideo, ...restVideos] = videos;
        draftState.selected = firstVideo;
        draftState.list = restVideos;
        draftState.history = [firstVideo];
        draftState.historyIndex = 0;
      }
    }, false, 'video/setVideos'),
    undo: () => set(({ videoSlice: draftState }) => {
      if (draftState.historyIndex > 0) {
        draftState.historyIndex -= 1;
        draftState.selected = draftState.history[draftState.historyIndex];
      }
    }, false, 'video/undo'),
    redo: () => set(({ videoSlice: draftState }) => {
      if (draftState.historyIndex < draftState.history.length - 1) {
        draftState.historyIndex += 1;
        draftState.selected = draftState.history[draftState.historyIndex];
      }
    }, false, 'video/redo'),
  };
}
