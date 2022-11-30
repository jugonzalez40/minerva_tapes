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

import SpotifyButton from '../components/SpotifyButton';

import { Cassette } from '../components';
import CassetteList from "../components/Cassette/CassetteList";

// const abril = Jacques_Francois({
//   weight: "400", 
// });

export default function MainPage() {


  // const renderPlaylist = (playlists: Playlist[]) => {
  //   return playlists
  //     .filter(({ images }) => images?.length)
  //     .map((playlist) => {
  //       return (
  //         <div>
  //           <img src={playlist.images[0].url} width={200} alt="" />
  //         </div>
  //       );
  //     });
  // };

  return (
    <div className={"main-page"}>

      <SpotifyButton />


      <CassetteList />

      {/* <Cassette
          title='Pussy Channel'
          img='https://arc-anglerfish-arc2-prod-elespectador.s3.amazonaws.com/public/UMSTQ6E6KJCLVGFTCGJ7AL45MM.jpg'
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet f" /> */}

    </div>
  );
}
