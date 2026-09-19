import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Submit from "./pages/Submit.tsx";
import Donate from "./pages/Donate.tsx";
import Tickets from "./pages/Tickets.tsx";
import SprocketHoles from "./components/SprocketHoles.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import { pages } from "./data/pages.ts";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SprocketHoles variant="bottom" />
      <Header />
      <Routes>
        <Route path={pages.index.path} element={<Home />} />
        <Route path={pages.about.path} element={<About />} />
        <Route path={pages.submit.path} element={<Submit />} />
        <Route path={pages.donate.path} element={<Donate />} />
        <Route path={pages.tickets.path} element={<Tickets />} />
        <Route path={pages.profile.path} element={<ProfilePage />} />
      </Routes>
      <Footer />
      <SprocketHoles variant="top" />
    </BrowserRouter>
  );
};

export default App;
