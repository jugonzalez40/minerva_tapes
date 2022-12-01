"use client";

import React from "react";
import "../styles/globals.scss";
import SpotifyAPI from "../../services/spotify-api";
import useSpotifyStore from "../(state)/useSpotifyStore";

export default function SpotifyCallBackPage() {
    //   const [user, setUser] = React.useState<User>({});

    const setUser = useSpotifyStore((state) => state.setUser);

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

        // redirect to 
    };

    React.useEffect(() => {
        oAuthCallbakFlow();
    }, []);

    return (
        <div />
    );
}
