import React, { Component } from 'react'
import PropTypes from 'prop-Types'
import './media.css'

class Media extends Component {
  // constructor() {
  //   // Enlazo (bind) eventos y/o inicializo estado
  // }
  // componentWillMount() {
  //   // Se ejecuta antes de montar el componente
  //   // Se podría usar para hacer un setState()
  // }
  // render() {
  //   // Contiene todos los elementos a renderizar
  //   // podrías usarlo para calcular propiedades (ej: concatenar una cadena)
  // }
  // componentDidMount() {
  //   //Solo se lanza una vez
  //   //Ideal para llamar a una API, hacer un setInteval, etc
  // }

  // //Actualización:
  // componentWillReceiveProps() {
  //   //Es llamado cuando el componente recibe nuevas propiedades.

  // }
  // shouldComponentUpdate() {
  //   //Idea para poner una condición y  si las propiedades que le llegaron anteriormente
  //   // eran las mismas que tenia retornar false para evitar re-renderear el componente
  // }
  // componentWillUpdate() {
  //   //metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
  // }

  // // re-render si es necesario...

  // componentDidUpdate() {
  //   //Método llamado luego del re-render
  // }
  // componentWillUnmount() {
  //   //Método llamado antes de desmontar el componente
  // }
  // componentDidCatch() {
  //   // Si ocurre algún error, lo capturo desde acá:
  // }

  // state = {
  //   ...this.props
  // }

  // handleClick = (event) => {
  //   this.setState({
  //     author: 'Ricardo Celis'
  //   })
  // }

  render () {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: '260px',
        border: '1px solid red'
      }
    }

    return (
      // <div className="Media" onClick={this.handleClick}>
      <div className="Media">
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