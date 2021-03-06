import React from 'react'
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body'
import Footer from "./Footer"
import NewReleases from "./NewReleases"
import MyLibrary from './MyLibrary';
import FeaturedPlaylists from "./FeaturedPlaylists"
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Router>
                    <Sidebar />
                    <Switch>
                        {/* Main Body is same as Current Playlists page */}
                        <Route path="/" exact={true} component={Body} spotify={spotify}/> 
                        <Route path="/NewReleases" component={NewReleases} spotify={spotify} />
                        <Route path="/featuredPlaylists" component={FeaturedPlaylists} spotify={spotify} />
                        <Route path="/MyLibrary" component={MyLibrary} spotify={spotify} />
                        <Route path="/Search" component={SearchPage} />
                        {/* <Route path="/myPlaylists" componenet={MyPlaylists} spotify={spotify} /> */}
                    </Switch>
                </Router>
            </div>

            <Footer />
        </div>
    )
}

export default Player
