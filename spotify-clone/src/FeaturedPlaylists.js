import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

function FeaturedPlaylists({spotify}) {
    const [{ featuredPlaylists }, dispatch] = useDataLayerValue();
    console.log(featuredPlaylists);
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <header className="new_header">{featuredPlaylists.message}</header>
            <div className="grid__playlists">
                {featuredPlaylists?.playlists.items.map(item => (
                    <div className="grid__container">
                        <img src={item.images[0].url}></img>
                        <PlayCircleOutlineIcon fontSize="large" className="play__btn" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedPlaylists
