import React from 'react'
import './TrackSearchResult.css'


function TrackSearchResult({result, artist, playlist}) {
    //console.log(result)
    //console.log(artist)
    // console.log(playlist)
    return (
        <div className="result__container">
            <div className="top__container">
                {/* TOP LEFT */}
                <div className="topResult__container"> 
                    <h2>상위결과</h2>
                    <div className="topResult__info">
                        <img src={artist[0]?.artistImg} alt="" />
                        <h1>{artist[0]?.artistName}</h1>
                        <h4>{artist[0]?.artistType}</h4>
                    </div>
                </div>
                {/* TOP RIGHT */}
                <div className="track__container">
                    <h2>곡</h2>
                    <div className="topResult__info">
                        {result?.map(item => (
                            <>
                                <div>
                                    <div className="tracks__image">
                                        <img src={item?.albumUrl} alt="" />
                                        <div className="tracks__info">
                                            <h4 className="tracks__title">{item?.title}</h4>
                                            <h5 className="tracks__artist">{item?.artist}</h5>
                                        </div>
                                    </div>
                                    <div className="tracks__duration">
                                        <h5 className="tracks__duration" >{item?.duration}</h5>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className="middle__container">
                <h2>아티스트</h2>
                <div className="artist__container">
                    {artist?.map(item => (
                        <>
                        <div className="artist__card">
                            <img src={item.artistImg} alt="" />
                            <h4>{item.artistName}</h4>
                            <h5>{item.artistType}</h5>
                        </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="middle__container">
                <h2>앨범</h2>
                <div className="artist__container">
                    {result?.map(item => (
                        <>
                        <div className="artist__card squre">
                            <img src={item?.albumUrl} alt="" />
                            <h4>{item.album}</h4>
                            <h5>{item.artist}</h5>
                        </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="middle__container">
                <h2>플레이리스트</h2>
                <div className="artist__container">
                    {playlist?.map(item => (
                        <>
                        <div className="artist__card squre">
                            <img src={item?.playlistImage} alt=""/>
                            <h4>{item?.playlistName}</h4>
                            <h5>{item.playlistDesc}</h5>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackSearchResult
