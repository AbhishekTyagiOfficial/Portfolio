import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mca from "./components/Mca";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bsc from "./components/Bsc";
import Intermediate from "./components/Intermediate";
import Matrix from "./components/Matrix";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="mca" element={<Mca />} />
              <Route path="bsc" element={<Bsc />} />
              <Route path="intermediate" element={<Intermediate />} />
              <Route path="Matrix" element={<Matrix />} />
            </Route>
          </Routes>
          <Footer />
        </header>
      </Router>
    </div>
  );
}

export default App;
