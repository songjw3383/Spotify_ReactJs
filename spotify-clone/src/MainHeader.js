import React from 'react'
import './MainHeader.css'
import { useDataLayerValue } from './DataLayer';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
function MainHeader() {
    const [{user, token}, dispatch] = useDataLayerValue();
    return (
        <div className="main__header">
            <div className="left">
                <ChevronLeftIcon />
                <KeyboardArrowRightIcon />
            </div>
            <div className="right">
                <Avatar src={user?.images[0]?.url} alt="JW" />
                <h4>{user?.display_name}</h4>
                <ExpandMoreIcon/>
            </div>
            
        </div>
    )
}

export default MainHeader
