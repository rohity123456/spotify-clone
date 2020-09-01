export const initialState = {
  user: null,
  spotify: undefined,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  weeklyPlaylist: null,
  origin: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_SPOTIFY_OBJECT":
      return { ...state, spotify: action.spotify };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_WEEKLY_PLAYLIST":
      return { ...state, weeklyPlaylist: action.playlist };
    case "SET_ORIGIN":
      return { ...state, origin: action.origin };
    default:
      return state;
  }
};

export default reducer;
