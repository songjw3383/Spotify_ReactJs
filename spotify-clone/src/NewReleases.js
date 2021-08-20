import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

function NewReleases({spotify}) {
    const [{ newReleases }, dispatch] = useDataLayerValue();
    // console.log(newReleases);
    return (
        <div className="body">
            {/* <Header spotify={spotify}/> */}

            <header className="new_header">NEW RELEASES</header>
            <div className="grid__playlists">
                {newReleases?.albums.items.map(item => (
                    <div className="grid__container">
                    <img src={item.images[0].url}></img>
                    <PlayCircleOutlineIcon fontSize="large" className="play__btn" />
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default NewReleases
