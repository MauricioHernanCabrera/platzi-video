import React, { Component } from 'react'
import Media from './media'
import './playlist.css'

class Playlist extends Component {
  render () {
    console.log(this.props.data)
    const playlist = this.props.data.categories[0].playlist
    return (
      <div className="Playlist">
        {
          playlist.map((item) => {
            // return <Media
            //         type="video"
            //         title={item.title}
            //         author="Leonidas Esteban"
            //         image="./images/covers/bitcoin.jpg"
            //         key={item.id}
            //       />
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    )
  }
}

export default Playlist