"use client";

import React from "react";
import Image from "next/image";
import casete from "../assets/casete.png";
import config from "./config";
import SpotifyOAuthService from "./services/spotify-oauth";

export default function MainPage() {

  React.useEffect(() => {
    SpotifyOAuthService.callbackOAuth();
  }, []);

  const handleLoginSpotify = () => {
    console.log('??')
    SpotifyOAuthService.startOAuthFlow();
  };

  return (
    <div>
      {/* <Image width={200} src={casete} /> */}
      <button onClick={handleLoginSpotify}>ingresar a spotify</button>
    </div>
  );
}
