// npm
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// files
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Releases from "./pages/Releases";
import Platforms from "./pages/Platforms";
import Genres from "./pages/Genres";
import GameDetail from "./pages/GameDetail";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const location = useLocation();

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Layout>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/popular/:slug" element={<Popular />} />
            <Route path="/releases/:slug" element={<Releases />} />
            <Route path="/platforms/:slug" element={<Platforms />} />
            <Route path="/genres/:slug" element={<Genres />} />
            <Route path="/game/:slug" element={<GameDetail />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </div>
  );
}
export default App;
