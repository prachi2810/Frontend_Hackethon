
import './App.css';

import { Routes, Route } from "react-router-dom";
import Addpage from './Components/Addpage/Addpage';
import Home from './Components/Home/Home';
import Editor from './Components/Editor/Editor';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="">
         <Route index element={<><Home/></>}></Route>
      </Route>
    <Route path="home">
         <Route index element={<><Home/></>}></Route>
      </Route>
      <Route path="editor">
         <Route index element={<Editor/>}></Route>
      </Route>
      <Route path="addPage">
         <Route index element={<><Addpage/></>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
