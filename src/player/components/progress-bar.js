import React from 'react'
import './progress-bar.css'

const ProgressBar = props => (
  <div className="ProgressBar">
    <input type="range"
      min={0}
      max={props.duration}
      step={1}
      value={props.value}
      onChange={props.handleProgressChange}
    />
  </div>
)

export default ProgressBar