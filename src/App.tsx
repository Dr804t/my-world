import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./page/about";
import Home from "./page/Home";
import Footer from "./components/Footer";

function App() {
    return (
      <Router>
        <div className="h-full w-full flex flex-col">
          <Header />
          <main className="flex-grow pt-24"> {/* Add padding to offset the header */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;