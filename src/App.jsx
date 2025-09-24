import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Programs } from "./pages/programs/Programs";
import { Detail } from "./pages/detail/Detail";
import { EnrollPrograms } from "./pages/enroll/EnrollPrograms";

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
            <Route
              path="/program/enroll-programs-title"
              element={<EnrollPrograms />}
            />
          </Routes>
          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
