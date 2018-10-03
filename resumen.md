#Resumen

## 15. Componentes Puros y funcionales en reactJS
### PureComponent: tiene el método shouldComponentUpdate ya asignado (por defecto), si a este componente no se le actualizan las propiedades, no tenemos que validar a mano con shouldComponentUpdate, ### PureComponent lo hace por nosotros, es decir; si recibe nuevas propiedades pero son las que ya teniamos, no se re-renderiza.

```javascript
import React, { PureComponent } from 'react';

class Playlist extends PureComponent{
  render() {
    <Componente />
    }
}
```

### Componente Funcional: Es una función la cual solo retorna el JSX de nuestro componente (renderiza UI), es mas sencillo, mas fácil de probar y este componente no tiene ciclo de vida.

```javascript
import React from'react';

function Playlist(props) {
  return<Componente title={props.title} />
}
```



## Smart Components &amp;amp; Dumb Components
### Presentacional Cómo se ve
Puede contener smart components u otros componentes de UI
Permiten composición con `[props.children]``
No depeden del resto de la aplicación
No especifica cómo los datos son cargados o mutados
Recibe datos y callbacks solo con propiedades
Rara vez tienen su propio estado
Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser Componentes funcionales o Pure Components

### Containers Qué hace
Concetrado en el funcionamiento de la aplicación
Contienen componentes de UI u otros containers
No tienen estilos
Proveen de datos a componentes de UI u otros contenedores
Proveen de callbacks a la UI
Normalmente tienen estado
Llaman acciones
Generados por higher order components


