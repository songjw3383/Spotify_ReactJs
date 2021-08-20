import React, { useEffect, useState } from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';
import TrackSearchResult from './TrackSearchResult';
import SearchPage from './SearchPage';


const spotify = new SpotifyWebApi();

function Header() {
    const [{user, token}, dispatch] = useDataLayerValue();

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [searchArtist, setArtist] = useState([])
    const [searchPlaylist, setPlaylist] = useState([])

    // console.log(searchResults)
    useEffect(() => {
        if(!search) return setSearchResults([]), setArtist([]), setPlaylist([]) // 검색 결과 없을시 초기화 하는 구간
        let cancel = false
        spotify.searchTracks(search).then(res => {
            // console.log(res)
            if (cancel) return
            setSearchResults(res.tracks.items.map(track => {
                const duration = track.duration_ms;
                //console.log(duration)
                function milstosec(duration) { // mils to second function
                    let minutes = Math.floor(duration / 60000);
                    let seconds = ((duration % 60000) / 1000).toFixed(0);
                    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
                }
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl:track.album.images[0].url,
                        album:track.album.name,
                        duration:milstosec(duration)
                    }
                }))
            })
        spotify.searchArtists(search).then(res => {
            // console.log(res);
            if (cancel) return
            setArtist(res.artists.items.map(artist => {
                return {
                    artistName:artist.name,
                    artistImg:artist.images[0]?.url,
                    artistType:artist.type,
                }
            }))
        })
        spotify.searchPlaylists(search).then(res => {
            console.log(res);
            if (cancel) return
            setPlaylist(res.playlists.items.map(playlist => {
                const description = playlist?.description;
                const replacing = description.replace(/(<([^>]+)>)/ig,""); // 문자열 내 html 태그 요소 삭제
                function letterSlice(replacing) {
                    if(replacing.length <50){
                        return replacing
                    }
                    else if(replacing.length > 30) {
                    let slice = replacing.substr(0,60);
                    return slice + "..."}
                }
                return {
                    playlistName:playlist.name,
                    playlistDesc:letterSlice(replacing),
                    playlistImage:playlist.images[0]?.url
                }
            }))
        })

        return () => cancel = true
    },[search])

    return (
        <div className='header'>

            <div className="header__left">
                
                <input placeholder="Search for Artists, Songs" type="text" value={search}
                onChange={e => setSearch(e.target.value)}></input>

                <div className="header__search">
                    <TrackSearchResult 
                        result={searchResults} 
                        artist={searchArtist}
                        playlist={searchPlaylist}/>
                </div>

            </div>
                

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="JW" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
