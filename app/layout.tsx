import React from "react";
import "../styles/globals.scss";
import Minerva from '../assets/fond.png';

import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className={"mt-app"}>
          {/* <img src={Minerva.src} alt="" /> */}
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
            {children}
            {/* <button onClick={handleLoginSpotify}>ingresar a spotify</button>
            {user && <UserCard image={user.picture_profile} name={user.id} />}

            {user?.playlists && renderPlaylist(user.playlists)} */}
          </main>
        </div>


            <Script src="https://open.spotify.com/embed-podcast/iframe-api/v1"></Script>

      </body>
    </html>
  )
}
