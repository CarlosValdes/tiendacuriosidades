
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { NaviBar } from './components/NaviBar';
import {Tienda} from './pages/tienda/tienda';
import {Carrito} from './pages/carrito/carrito';
import {ShopContextProvider} from './context/shopcontext'
import {Listado} from './pages/inventario/listado'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        <NaviBar/>
          <Routes>
            <Route path='/'element={<Tienda/>}/>
            <Route path='/cart' element={<Carrito/>}/>
            <Route path='/lista' element={<Listado/>}/>
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
