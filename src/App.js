import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPages from "./Components/AllPages/AllPages";
import Home from "./Components/Home/Home";
import Editor from "./Components/Editor/Editor";
import Edit from "./Components/Edit/Edit";
// import "../src/Components/Login/styles.css";
import SignUpIncomponent from "./Components/Login/SignUpIncomponent";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" index element={<Home />}></Route>
        <Route path="home" index element={<Home />}></Route>
        <Route path="editor" index element={<Editor />}></Route>
        <Route path="edit/:id" index element={<Edit />}></Route>
        <Route path="allPages/:id" index element={<AllPages/>}></Route>
        <Route path="login" index element={<SignUpIncomponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
