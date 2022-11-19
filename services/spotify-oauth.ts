import config from "../config";

const stateKey = "spotify_auth_state";

function generateRandomString(length: number) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getSpotifyUrl(params: object) {
  const baseUrl = "https://accounts.spotify.com/authorize?";
  return Object.entries(params)
    .reduce(
      (base, [key, value]) => `${base}${key}=${encodeURIComponent(value)}&`,
      baseUrl
    )
    .slice(0, -1);
}

function getHashParams(): object {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function startOAuthFlow() {
  const state = generateRandomString(16);
  localStorage.setItem(stateKey, state);

  // let url = "https://accounts.spotify.com/authorize";
  // url += "?response_type=token";
  // url += "&client_id=" + encodeURIComponent(config.spotify_client_id);
  // url += "&scope=" + encodeURIComponent(config.scope);
  // url += "&redirect_uri=" + encodeURIComponent(config.redirect_url);
  // url += "&state=" + encodeURIComponent(state);

  const params = {
    response_type: "token",
    client_id: config.spotify_client_id,
    scope: config.scope,
    redirect_uri: config.redirect_url,
    state: state,
  };
  const url = getSpotifyUrl(params);

  (window as Window).location = url;
}

async function sendLogin() {
  const params = getHashParams();
  if (!Object.keys(params).length) return;

  const { access_token, state } = params;
  const storedState = localStorage.getItem(stateKey);

  if (access_token && (state == null || state !== storedState)) {
    // ERROR!
    console.log("the error");
    return null;
  }

  const result = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  }).then((response) => response.json());

  const playlists = await fetch(
    `https://api.spotify.com/v1/users/${result.id}/playlists?limit=50`,
    {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  ).then((response) => response.json());

  console.log("result");
  console.log(result);
  return { ...result, playlists };
  /**
     * 
     * $.ajax({
          url: 'https://api.spotify.com/v1/me',
          headers: {
            'Authorization': 'Bearer ' + access_token
          },
          success: function(response) {
            userProfilePlaceholder.innerHTML = userProfileTemplate(response);

            $('#login').hide();
            $('#loggedin').show();
          }
      });
     */
}

async function getPlaylists(user_id) {
  // https://api.spotify.com/v1/users/{user_id}/playlists

  const result = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  }).then((response) => response.json());
}

export default {
  startOAuthFlow,
  sendLogin,
};
