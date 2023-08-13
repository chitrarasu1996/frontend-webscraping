
import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="App">
    
    <Routes>

      <Route path="/" element={<ProductsList/>}/>
    <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
    </Routes>
    </div>
  );
}

export default App;
