import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/main";

import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import LikedMenu from "./pages/likedMenu";
import NotFound from "./pages/notFound";
import Recipe from "./pages/recipe";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="recipes/:id" element={<Recipe />} />
          <Route path="likedMenu" element={<LikedMenu />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
