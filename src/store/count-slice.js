export default function createCountSlice(set) {
  return {
    count: 0,
    increment: () => set(({ countSlice: draftState }) => { draftState.count += 1; }, false, 'counter/increment'),
    decrement: () => set(({ countSlice: draftState }) => { draftState.count -= 1; }, false, 'counter/decrement'),
  };
}
