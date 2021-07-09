export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://192.168.0.18:3000";
const clientId = "4fb7a75d847b4c32b96b319102b3448f";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// Login.js -> Click the Login With spotify button, then authEndpoint helping checks account
// and redirctUri back to localhost, once logged in