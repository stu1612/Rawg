// npm
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// files
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Releases from "./pages/Releases";
import Trending from "./pages/Trending";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
