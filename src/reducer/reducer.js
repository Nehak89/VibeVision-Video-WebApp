export const LikedVideos = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIKE":
      return { ...state, Liked: [...state.Liked, action.payload ] };
    case "REMOVE_TO_LIKE":
      return {
        ...state,
        Liked: state.Liked.filter((c) => c.id !== action.payload.id)
      };
    default:
      return state;
  }
};
