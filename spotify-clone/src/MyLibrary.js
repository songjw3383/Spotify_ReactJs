import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import FavoriteIcon from '@material-ui/icons/Favorite';
import SongRow from './SongRow'

function MyLibrary({spotify}) {
    const [{ topArtists,topTracks,playlists,savedTracks }, dispatch] = useDataLayerValue();
    
    console.log(savedTracks)
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <h2>Playlists</h2>

            <div className="artist__grid playlist_scrollbar">
                <div className="favorite__container">
                <img src={savedTracks?.items[0].track.album.images[0].url} alt="" />
                    <div className="favorite__firsttracks">
                            <span className="name">{savedTracks?.items[0].track.artists[0].name}</span>
                            <span className="title">{savedTracks?.items[0].track.name}</span>
                        </div>
                        <h2>좋아요 표시한 곡</h2>
                        <span>{savedTracks?.total} 좋아요 표시한 곡</span>
                </div>

                {playlists?.items.map(item => (
                    <div className="grid__content">
                        <>
                        <img src={item.images[0].url} alt="" />
                        <span>{item.name}</span>
                        </>
                    </div>
                ))}
            </div>

            <h2>Top Artists</h2>
            <div className="artist__grid">
                {topArtists?.items.map(item => (
                    <div className="grid__content">
                        <>
                        <img src={item.images[0].url} alt="" />
                        <span>{item.name}</span>
                        <div class="grid__followers">
                            <FavoriteIcon className="FavIcon"/><h4>{item.followers.total}</h4>
                        </div>
                        </>
                    </div>
                ))}
            </div>

            <h2>Top Tracks</h2>
            <div className="artist__grid">
                {topTracks?.items.map(item => (
                    <div className="grid__content">
                        <>
                        <img src={item.album.images[0].url} alt="" />
                        <span>{item.name}</span>
                        </>
                    </div>
                ))}
            </div>

            </div>
    )
}

export default MyLibrary
