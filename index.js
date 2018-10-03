// import React from 'react'
import React from 'react'
import { render } from 'react-dom'

import Media from './src/playlist/components/media'

const app = document.getElementById('app')

render(
  <Media 
    type="video"
    title="¿Qué es responsive Design?" 
    author="Leonidas Esteban" 
    images="./images/covers/bitcoin.jpg"
  />, app
)

