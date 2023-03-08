import "./App.css";

import { Routes, Route } from "react-router-dom";
import Addpage from "./Components/Addpage/Addpage";
import Home from "./Components/Home/Home";
import Editor from "./Components/Editor/Editor";
import Login from "./Components/Login/SignUpIncomponent";
import Edit from "./Components/Edit/Edit";
import SignUpIncomponent from "./Components/Login/SignUpIncomponent";
import AllTemplates from "./Components/templates/AllTemplates";
import CreateTemplate from "./Components/templates/CreateTemplate";
import UseTemplate from "./Components/templates/UseTemplates";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" index element={<Home />}></Route>
        <Route path="register" element={<SignUpIncomponent />}></Route>
        <Route path="home" index element={<Home />}></Route>
        <Route path="editor" index element={<Editor />}></Route>
        <Route path="edit/:id" index element={<Edit />}></Route>
        <Route path="addPage/:id" index element={<Addpage />}></Route>
        <Route path="login" index element={<SignUpIncomponent/>}></Route>
        <Route path="templates" index element={<AllTemplates/>}></Route>
        <Route path="createTemplate" index element={<CreateTemplate/>}></Route>
        <Route path="useTemplate/:id" index element={<UseTemplate/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
