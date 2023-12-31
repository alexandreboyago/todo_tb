import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem/index';

const App = () => {
  
  const [list, setList] = useState<Item[]>([
    { id: 1, name:'Ir até a padaria', done: false},
    { id: 2, name:'Compar pão', done: true},
    { id: 3, name:'Pagar a Escola', done: true},
    { id: 4, name:'Consulta Médica 30/11', done: false},
  ]);
  

  return(
    <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          {/* Área para adicionar as tarefas */}
          {
            list.map( (item, index) => (
              <ListItem key={index} item={item}/>
            ) )
          }

        </C.Area>
    </C.Container>
  )
}
export default App;