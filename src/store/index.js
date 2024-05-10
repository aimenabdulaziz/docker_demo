import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import createVideoSlice from './video-slice';
import createCountSlice from './count-slice';

// folks can use slices or multiple stores if they want
const useStore = create(devtools(immer((...args) => ({
  videoSlice: createVideoSlice(...args),
  countSlice: createCountSlice(...args),
}))));

export default useStore;
