import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { SoftSkills } from "./pages/home/quickaccess/softskills/SoftSkills";
import { Mentorias } from "./pages/home/quickaccess/mentorias/Mentorias";
import { Programs } from "./pages/programs/Programs";
import { Detail } from "./pages/detail/Detail";
import { CategoriesAll } from "./pages/home/category/CategoriesAll";
import { EnrollPrograms } from "./pages/enroll/EnrollPrograms";
import { SignIn } from "./pages/account/sigin/SignIn";
import { SignUp } from "./pages/account/signup/SignUp";
import { UnderConstruction } from "./pages/error/under-construction";
import { NotFound } from "./pages/error/not-found";
import { Recursos } from "./pages/recursos/Recursos";
import { About } from "./pages/about/About";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { BlogOne } from "./pages/home/blog/BlogOne";
import { FalaAe } from "./pages/falaae/FalaAe";
import { Aprender } from "./pages/aprender/Aprender";
import { Carreiras } from "./pages/career/Career";
import { Termos } from "./pages/docs/Termos";
import { Privacy } from "./pages/docs/Privacidade";


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
            {/* Pages UnderConstruction */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Termos />} />
            <Route path="/careers" element={<Carreiras />} />
            <Route path="/aprender" element={<Aprender />} />
            <Route path="/blog/:id" element={<BlogOne />} />
            <Route path="/softskills" element={<SoftSkills />} />
            <Route path="/mentorias" element={<Mentorias />} />
            <Route path="/resources" element={<Recursos />} />
            <Route path="/about" element={<About />} />
            <Route path="/falaae" element={<FalaAe />} />
            {/* Auth */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/category" element={<CategoriesAll />} />
            {/* Dynamic Program Routes */}
            <Route
              path="/program/:category/:id/enroll"
              element={<EnrollPrograms />}
            />
            <Route path="/program/:category/:id" element={<Detail />} />
            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Footer Section */}
          <Footer />
          {/* Button ToTop */}
          <ScrollToTop />
        </main>
      </Router>
    </>
  );
}

export default App;