import HomePage from "./Pages/HomePage/HomePage";
import Login1 from "./Pages/Login/Login1";
import Register from './Pages/Signup/Register';
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import { Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
import ProjectSettings from "./Pages/ProjectSettings/ProjectSettings";
import Tasker from "./Pages/Projects/Tasker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login1/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/admin" element={<AdminPanel/>}></Route>
    </Routes>
  );
}

export default App;  