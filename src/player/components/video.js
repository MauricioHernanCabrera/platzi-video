import React, { Component } from 'react'
import './video.css'

class Video extends Component {
  togglePlay = () => (this.props.pause)? this.video.play() : this.video.pause()

  componentWillReceiveProps (nextProps) {
    if (nextProps.pause !== this.props.pause) this.togglePlay()
  }

  setRef = element => this.video = element

  render () {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
    } = this.props
    
    return (
      <div className="Video">
        <video 
          autoPlay={this.props.autoPlay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    )
  }
}

export default Video