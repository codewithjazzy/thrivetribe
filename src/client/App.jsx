import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Providers from "./pages/Providers";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
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
          <Route path="/providers" element={<Providers/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/therapy101" element={<Starter/>}/>
          <Route path="/types" element={<Types/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
