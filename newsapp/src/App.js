
import './App.css';
import About from './Componet/About';
import Home from './Componet/Home';
import Navbar from './Componet/Navbar';
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
     
   
    </div>
  );
}

export default App;
