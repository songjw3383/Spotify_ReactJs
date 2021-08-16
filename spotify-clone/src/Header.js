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

    useEffect(() => {
        if(!search) return setSearchResults([])
        let cancel = false
        spotify.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(res.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, image) => {
                        if(image.height < smallest.height) return image
                        return smallest
                    }, track.album.images[0])
                    
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl:smallestAlbumImage.url,
                        album:track.album.name
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

                <div className="header__search" style={{overflowY: "auto"}}>
                    {searchResults.map(track => (
                        <TrackSearchResult track={track} key={track.uri} />
                    ))}
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
