import config from "../config";
import Utils from "./helpers/utils";
import { User, OAuthParams, OAuthResponse } from "../types/oauth";

const stateKey = "spotify_auth_state";

class SpotifyAPI {
  private params: Partial<OAuthResponse> = {};
  public user: User = {};
  public error: string[] = [];

  constructor() {}

  validSpotifyOAuthResponse(): boolean {
    this.params = Utils.getHashParams();
    if (!Object.keys(this.params).length) return false;

    const { access_token, state } = this.params;
    const storedState = localStorage.getItem(stateKey);

    return !!access_token && !!state && state === storedState;
  }

  startOAuthFlow() {
    const state = Utils.generateRandomString(16);
    localStorage.setItem(stateKey, state);

    const params: OAuthParams = {
      response_type: "token",
      client_id: config.spotify_client_id,
      scope: config.scope,
      redirect_uri: config.redirect_url,
      state: state,
    };
    const url = Utils.getSpotifyUrl(params);

    (window as Window).location = url;
  }

  async login() {
    const result = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + this.params.access_token,
      },
    }).then((response) => response.json());

    if (!result) {
      // TODO
      console.log("helo");
      return this;
    }

    this.user = {
      id: result.display_name,
      country: result.country,
      picture_profile: result.images[0].url,
      apiUrl: result.href,
    };

    return this;
  }

  async getPlaylists() {

    const data = await fetch(
      `${this.user.apiUrl}/playlists?limit=50`,
      {
        headers: {
          Authorization: `Bearer ${this.params.access_token}`,
        },
      }
    ).then((response) => response.json());

    debugger; 
    if (!data.items) {
      // TODO
      console.log("helo");
      return this;
    }

    this.user.playlists = data.items;
    return this;
  }
}

export default new SpotifyAPI();
