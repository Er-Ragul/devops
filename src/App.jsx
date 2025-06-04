import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Maker from "./pages/Maker";
import Blog from "./pages/Blog";
import Devops from "./pages/Devops";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/devops/:page" element={<Devops />} />
        <Route path="/blog/maker" element={<Maker />} />
        <Route path="/blog/:blog" element={<Blog/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
