import React from 'react'
import './timer.css'

const leftPad = n => `0${n}`.substr(-2)

const formattedTime = secs => {
  const minutes = ~~(secs / 60)
  const seconds = ~~(secs % 60)
  return `${leftPad(minutes)}:${leftPad(seconds)}`
}

const Timer = props => (
  <div className="Timer">
    <p>
      <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
    </p>
  </div>
)

export default Timer