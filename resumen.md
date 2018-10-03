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

functionPlaylist(props) {
  return<Componente title={props.title} />
}
```