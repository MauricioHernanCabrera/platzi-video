import React from 'react'
import Media from './media'
import './playlist.css'


// function Playlist (props) {
//   return (
//     // <div onClick={props.handleClick}>
//     <div>
//       {props}
//     </div>
//   )
// }

function Playlist (props) {
  console.log(props.data)
  const playlist = props.data.categories[0].playlist
  return (
    <div className="Playlist">
      Esta es una playlist funcional
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id}/>
        })
      }
    </div>
  )
}

export default Playlist