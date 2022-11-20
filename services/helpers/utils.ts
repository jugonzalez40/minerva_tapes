import { OAuthParams, OAuthResponse } from '../../types/oauth';
const generateRandomString = (length: number) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

function getSpotifyUrl(params: OAuthParams) {
  const baseUrl = "https://accounts.spotify.com/authorize?";
  return Object.entries(params)
    .reduce(
      (base, [key, value]) => `${base}${key}=${encodeURIComponent(value)}&`,
      baseUrl
    )
    .slice(0, -1);
}

function getHashParams(): OAuthResponse {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams as OAuthResponse;
}

const Utils = {
  getSpotifyUrl,
  generateRandomString,
  getHashParams,
};

export default Utils;
