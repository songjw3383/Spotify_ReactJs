import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import SongRow from './SongRow'

function Body({spotify}) {
    const [{ playlists}, dispatch] = useDataLayerValue();
    // console.log(discover_weekly);
    
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                <img src={playlists?.items[0].images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{playlists.items[0].name}</h2>
                    {/* <p>{discover_weekly?.description}</p> */}
                    <p>R&B stands for rhythm and blues. It is a music genre whose origin is from African American cultures. The genre has changed a lot since its origin in the 1940s. The style for R&B music is usually soulful and moving. </p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle"/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz />
                </div>

                {/* {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))} */}
                
                
            </div>
        </div>
    )
}

export default Body
