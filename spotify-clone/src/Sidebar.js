import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            
            <br/>
            <strong className="sidebar__title"><Link to = "/featuredPlaylists">Editor's picks</Link></strong>
            <hr />
            <strong className="sidebar__title"><Link to = "/NewReleases">NEW RELEASESE</Link></strong>
            <hr />
            <strong className="sidebar__title"><Link to = "/">CURRENT PLAYLISTS</Link></strong>
            <hr />
            <strong className="sidebar__title">PLAYLISTS</strong>

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
                ))}
        </div>
    )
}

export default Sidebar
