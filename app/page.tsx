"use client";

import React from "react";
import "../styles/globals.scss";
import "../styles/page.scss";
import { Abril_Fatface, Jacques_Francois } from "@next/font/google";
import classNames from "classnames";
import Image from "next/image";
import logo from "../assets/logoweb.png";
import SpotifyOAuthService from "../services/spotify-oauth";
import UserCard from "../components/UserCard";

// const abril = Jacques_Francois({
//   weight: "400",
// });

export default function MainPage({ children }) {
  const [user, setUser] = React.useState(null);

  const xd = async () => {
    const result = await SpotifyOAuthService.sendLogin();
    if (result) {
      setUser(result);
    }
  };

  React.useEffect(() => {
    xd();

  }, []);

  const handleLoginSpotify = () => {
    SpotifyOAuthService.startOAuthFlow();
  };

  const renderPlaylist = (playlist) => {

  }

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
        {user && <UserCard image={user.images[0].url} name={user.display_name} />}

        {/* {user?.playlists && user.playlists.map(playlist => ({})); } */}

      </main>
    </div>
  );
}
