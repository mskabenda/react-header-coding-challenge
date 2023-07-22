import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Documentation from './pages/Documentation'
import Pricing from './pages/Pricing'
import Navbar from './Components/Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/Documentation" element={<Documentation />}/>
          <Route path="/Pricing" element={<Pricing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
