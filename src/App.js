
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ProductInfo from './ProductInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
