import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import Player from "./Player"
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user,token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
        console.log(playlists);
      })

      spotify.getMyRecentlyPlayedTracks().then((currentPlaylists) => {
        dispatch({
          type: 'CURRENT_PLAYLISTS',
          currentPlaylists: currentPlaylists,
        })
      })

      spotify.getNewReleases().then((newReleases) => {
        dispatch({
          type: 'NEWRELEASES',
          newReleases:newReleases,
        })
      })

      spotify.getFeaturedPlaylists().then(featuredPlaylists => {
        dispatch({
          type: 'FEATURED_PLAYLISTS',
          featuredPlaylists:featuredPlaylists,
        })
        // console.log(featuredPlaylists);
      })


      // * Search Part
      // spotify.searchTracks().then(searchPlaylists => {
      //   dispatch({
      //     type: 'SEARCH_PLAYLISTS',
      //     searchPlaylists: searchPlaylists,
      //   })
      //   console.log(searchPlaylists);
      // })

    }
  },[]);
    // console.log('user info', user);
    // console.log('token info', token);
  
  return (
    <div className="App">
      { token ? <Player spotify={spotify} /> : <Login /> }
    </div>
  );
}

export default App;
