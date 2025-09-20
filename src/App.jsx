import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { Programs } from "./pages/programs/Programs";

function App() {
  return (
    <>
      <Router>
        <main className="w-full bg-neutral-50 flex min-h-screen flex-col text-neutral-500">
          {/* Navbar section */}
          <Navbar />

          {/* Routes */}
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            {/* Pages */}
            <Route path="/programs" element={<Programs />} />
            {/* Auth */}
            {/* Details */}
          </Routes>

          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
