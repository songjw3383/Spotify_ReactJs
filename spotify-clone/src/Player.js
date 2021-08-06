import React from 'react'
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body'
import Footer from "./Footer"
import NewReleases from "./NewReleases"
import FeaturedPlaylists from "./FeaturedPlaylists"
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
                    </Switch>
                </Router>
            </div>

            <Footer />
        </div>
    )
}

export default Player
