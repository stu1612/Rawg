// npm
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// files
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Releases from "./pages/Releases";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/releases" element={<Releases />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
