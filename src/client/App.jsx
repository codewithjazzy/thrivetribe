import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Portal from "./pages/Portal"
import Profile from "./pages/Profile";
import Providers from "./pages/Providers";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp"
import Starter from "./pages/Starter";
import Types from "./pages/Types";
import Layout from "./Layout";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/member" element={<Member/>}/>
          <Route path="/portal" element={<Portal/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/providers" element={<Providers/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/therapy101" element={<Starter/>}/>
          <Route path="/types" element={<Types/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
