//for spotify communication

export const authEndPoint = "https://accounts.spotify.com/authorize";

const clientId = "65896918cd114925a322798970427bb0";
const redirectUri = localStorage.getItem("SET_ORIGIN");
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dailog=true`;

export const getTokenFromURI = () => {
  return window.location.hash
    .slice(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = parts[1];
      return initial;
    }, {});
};
