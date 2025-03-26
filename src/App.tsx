import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./page/about";
import Home from "./page/Home";
import Footer from "./components/Footer";

function App() {
    return (
      <Router>
        <div className="h-full w-full ">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
