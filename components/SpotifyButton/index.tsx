"use client";

import './styles/spotify-button.scss';
import { SpotifyAPI } from "../../services";
import SpotifyLogo from '../../assets/spotify-logo.png'

const className = 'mt-spotify-button';

export default function SpotifyButton() {
    const handleLoginSpotify = () => {
        SpotifyAPI.startOAuthFlow();
    };

    return (<button className={className} onClick={handleLoginSpotify}>
        <img src={SpotifyLogo.src} alt="" />
        <h1>Ingresar con spotify</h1>
        
    </button>);
};