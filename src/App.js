// npm
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

// files
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Releases from "./pages/Releases";
import Trending from "./pages/Trending";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/releases/:slug" element={<Releases />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
