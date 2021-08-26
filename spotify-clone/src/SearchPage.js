import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import SongRow from './SongRow'

function SearchPage({spotify}) {
    const [{ currentPlaylists }, dispatch] = useDataLayerValue();
    
    // console.log(currentPlaylists)
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                
            </div>

            <div className="body__songs">
                
            </div>
        </div>
    )
}

export default SearchPage
