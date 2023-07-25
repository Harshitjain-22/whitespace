import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Home/>
    </BrowserRouter>
    </div>
  );
}
export default App;
