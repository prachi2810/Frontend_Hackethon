
import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Addpage from './Components/Addpage/Addpage';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="landingPage">
         <Route index element={<LandingPage/>}></Route>
      </Route>
    <Route path="addPage">
         <Route index element={<Addpage/>}></Route>
      </Route>
      <Route path="drag-and-drop">
         <Route index element={<Home/>}></Route>
      </Route>
  
      
    </Routes>
    </div>
  );
}

export default App;
