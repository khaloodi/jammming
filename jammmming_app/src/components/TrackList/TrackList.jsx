import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

function TrackList() {
  return (
    <div className="TrackList">
      {this.props.tracks.map((track, i) => {
        return <Track track={track} key={i}/>
      })}
    </div>
  )
}

export default TrackList;