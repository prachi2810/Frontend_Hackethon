import "./App.css";

import { Routes, Route } from "react-router-dom";
import Addpage from "./Components/Addpage/Addpage";
import Home from "./Components/Home/Home";
import Editor from "./Components/Editor/Editor";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Edit from "./Components/Edit/Edit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" index element={<Home />}></Route>
        <Route path="login" index element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="home" index element={<Home />}></Route>
        <Route path="editor" index element={<Editor />}></Route>
        <Route path="edit/:id" index element={<Edit />}></Route>
        <Route path="addPage" index element={<Addpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
