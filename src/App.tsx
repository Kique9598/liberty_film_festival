import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Submit from "./pages/Submit.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
