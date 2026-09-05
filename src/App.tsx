import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Submit from "./pages/Submit.tsx";
import Donate from "./pages/Donate.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
