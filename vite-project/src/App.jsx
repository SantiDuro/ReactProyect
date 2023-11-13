import './App.css'
import NavBar from './components/NavBar'
import { ItemListContainer } from './components/NavBar/ItemListContainer/ItemListContainer.jsx'

function App() {

  return (
    <div className='padre'>
      <NavBar />
      <ItemListContainer greeting="Hola, bienvenidos a la tienda online de Lions"/>
    </div>
  
  )
}

export default App