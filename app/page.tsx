"use client";

import React from "react";
import "../styles/globals.scss";
import "../styles/page.scss";
import { Abril_Fatface, Jacques_Francois } from "@next/font/google";
import classNames from "classnames";
import Image from "next/image";
import logo from "../assets/logoweb.png";
import SpotifyAPI from "../services/spotify-api";
import UserCard from "../components/UserCard";
import { User, Playlist } from "../types/oauth";

// const abril = Jacques_Francois({
//   weight: "400",
// });

export default function MainPage({ children }) {
  const [user, setUser] = React.useState<User>({});

  const oAuthCallbakFlow = async () => {
    if (!SpotifyAPI.validSpotifyOAuthResponse()) return;

    await SpotifyAPI.login();
    await SpotifyAPI.getPlaylists();

    if (SpotifyAPI.error.length) {
      // Error manager
      console.log("error manager");
      return;
    }

    setUser(SpotifyAPI.user);
  };

  React.useEffect(() => {
    oAuthCallbakFlow();
  }, []);

  const handleLoginSpotify = () => {
    SpotifyAPI.startOAuthFlow();
  };

  const renderPlaylist = (playlists: Playlist[]) => {
    return playlists
      .filter(({ images }) => images?.length)
      .map((playlist) => {
        return (
          <div>
            <img src={playlist.images[0].url} width={200} alt="" />
          </div>
        );
      });
  };

  return (
    <div className={"app"}>
      <header>
        <div className="container">
          <h1>minerva tapes</h1>
        </div>
        <nav>
          <div className="container">
            <ul className="horizontal-menu">
              <li>
                <a href="">listas</a>
              </li>
              <li>
                <a href="">casetes</a>
              </li>
              <li>
                <a href="">contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container">
        <h3>hacemos casetes recopilados ediciones limitadas desde spotify</h3>
        {/* {children} */}
        <button onClick={handleLoginSpotify}>ingresar a spotify</button>
        {user && <UserCard image={user.picture_profile} name={user.id} />}

        {user?.playlists && renderPlaylist(user.playlists)}
      </main>
    </div>
  );
}
