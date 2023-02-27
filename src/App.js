
import './App.css';

import { Routes, Route } from "react-router-dom";
import Addpage from './Components/Addpage/Addpage';
import Home from './Components/Home/Home';
import Editor from './Components/Editor/Editor';
import Login from './Components/LoginSignUp/Login';
import "../src/Components/login/styles.css";
import Signincomponent from './Components/login/Signincomponent';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="">
         <Route index element={<><Home/></>}></Route>
      </Route>
      <Route path="login">
         <Route index element={<Login/>}></Route>
      </Route>
      <Route path="login1">
         <Route index element={<Signincomponent/>}></Route>
      </Route>
    <Route path="home">
         <Route index element={<Home/>}></Route>
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
