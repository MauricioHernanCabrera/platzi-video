import React, { PureComponent } from 'react'
import PropTypes from 'prop-Types'
import './media.css'

class Media extends PureComponent {
  handleClick = event => {
    this.props.openModal(this.props)
  }

  render () {
    return (
      <div 
        className="Media"
        onClick={this.handleClick}
      >
        <div className="Media-cover">
          <img 
            className="Media-image"
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media