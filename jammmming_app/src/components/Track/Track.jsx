import React from 'react'
import './Track.css'

function Track() {
  const renderAction = () => {
    return (
      isRemoval ? <button>-</button> : <button>+</button>
    )
  }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
  <p>{this.props.track.artis} | {this.props.track.album}</p>
      </div>
      <button className="Track-action">{renderAction()}</button>
    </div>
  )
}

export default Track;