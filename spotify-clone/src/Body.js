import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import SongRow from './SongRow'

function Body({spotify}) {
    const [{ currentPlaylists }, dispatch] = useDataLayerValue();
    
    console.log(currentPlaylists)
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={currentPlaylists?.items[0].track.album.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>최근 재생목록</strong>
                    <p>{currentPlaylists?.items[0].track.album.name}</p>
                    <h2>{currentPlaylists?.items[0].track.name}</h2>
                    
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle"/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz />
                </div>

                {currentPlaylists?.items.map(item => (
                    <SongRow track={item.track} />
                ))}
                
                
            </div>
        </div>
    )
}

export default Body
