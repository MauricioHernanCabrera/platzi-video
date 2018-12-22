import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount () {
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  render () {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chido!"
        />
        <Controls> 
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
        </Controls>
        <Video
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer