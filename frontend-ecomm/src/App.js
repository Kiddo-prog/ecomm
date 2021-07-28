import './App.css';
import Product from './Components/Pages/Products/Product';
import Dashboard from './Components/Pages/Dashboard';
import Box from '@material-ui/core/Box';
import Login from './Registration/Login';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockIcon from '@material-ui/icons/Lock';

function App() {
  return (
    <div className="App"> 
      <Dashboard />
      <Product />
    </div>
  );
}

export default App;
