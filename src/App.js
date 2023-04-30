
import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
    <Routes>

      <Route path="/" element={<ProductsList/>}/>
    
      
    </Routes>
    </div>
  );
}

export default App;
