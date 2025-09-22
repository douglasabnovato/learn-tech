import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { Programs } from "./pages/programs/Programs";
import { Detail } from "./pages/detail/Detail";

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
            <Route path="/program/detail" element={<Detail />} />
          </Routes>

          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
