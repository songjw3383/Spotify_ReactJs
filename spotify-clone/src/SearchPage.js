import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import SongRow from './SongRow'

function SearchPage({track}) {
    const [{ currentPlaylists }, dispatch] = useDataLayerValue();
    
    console.log(track)
    return (
        <div className="body">
            <Header />

            <div className="body__info">
              
            </div>
        </div>
    )
}

export default SearchPage
