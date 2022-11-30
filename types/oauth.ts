export type Playlist = {
  id: string;
  images: string[];
  url: string[];
};

export type _User = {
  id: string;
  playlists?: Playlist[];
  country: string;
  picture_profile: string;
  apiUrl: string;
};

export type User = Partial<_User>;

export type OAuthParams = {
  response_type: string;
  client_id: string;
  scope: string;
  redirect_uri: string;
  state: string;
};

export type OAuthResponse = {
  access_token: string;
  state: string;
  token_type: string;
  expires_in: string;
}