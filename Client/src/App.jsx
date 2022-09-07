import Topbar from "./components/topbar/Topbar.jsx";
import Home from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
//importing it like this
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {

  const {user} = useContext(Context);

  return (

    <Router>

      <Topbar />

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/register" element={user ? <Home /> : <Register />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />

        <Route path="/settings" element={user ? <Settings /> : <Register />} />

        <Route path="/write" element={user ? <Write /> : <Register />} />

        <Route path="/post/:postId" element={<Single />} />

      </Routes>

    </Router>

  );

}
export default App;