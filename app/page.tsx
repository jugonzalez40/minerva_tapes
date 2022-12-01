"use client";

declare global {
  interface Window { onSpotifyIframeApiReady: any; }
}

import React from "react";
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

import Script from 'next/script';

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



  React.useEffect(() => {
    console.log('THE WINDOW', window);
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      let element = document.getElementById('embed-iframe');
      let options = {
          // uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
          uri: 'spotify:playlist:0DFcFTgyzxw7SPTmtS9FRF'
        };
      let callback = (EmbedController) => {};
      IFrameAPI.createController(element, options, callback);
    };

  }, [])



  return (
    <div className={"mt-main-page"}>

      <SpotifyButton />

      <iframe src="https://open.spotify.com/embed/playlist/0DFcFTgyzxw7SPTmtS9FRF?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <div id="embed-iframe"></div>

      
      <h1>Cassettes </h1>

      <CassetteList />

      {/* <Cassette
          title='Pussy Channel'
          img='https://arc-anglerfish-arc2-prod-elespectador.s3.amazonaws.com/public/UMSTQ6E6KJCLVGFTCGJ7AL45MM.jpg'
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet f" /> */}

    </div>
  );
}