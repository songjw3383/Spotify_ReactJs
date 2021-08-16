import React from 'react'
import './TrackSearchResult.css'

function TrackSearchResult({track}) {
    // console.log(track)
    return (
        <div className="track__container">
            <img src={track.albumUrl} style={{height: '64px' ,width: '64px'}} />
            <div className="track__info">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}

export default TrackSearchResult
