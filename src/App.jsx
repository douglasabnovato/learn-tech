import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";

// Páginas carregadas sob demanda
const Home = lazy(() =>
  import("./pages/home/Home").then((module) => ({
    default: module.Home,
  })),
);

const Softskills = lazy(() =>
  import("./pages/home/quickaccess/softskills/Softskills").then((module) => ({
    default: module.Softskills,
  })),
);

const Mentorias = lazy(() =>
  import("./pages/home/quickaccess/mentorias/Mentorias").then((module) => ({
    default: module.Mentorias,
  })),
);

const Trilhas = lazy(() =>
  import("./pages/trilhas/Trilhas").then((module) => ({
    default: module.Trilhas,
  })),
);

const Programs = lazy(() =>
  import("./pages/programs/Programs").then((module) => ({
    default: module.Programs,
  })),
);

const Detail = lazy(() =>
  import("./pages/detail/Detail").then((module) => ({
    default: module.Detail,
  })),
);

const CategoriesAll = lazy(() =>
  import("./pages/home/category/CategoriesAll").then((module) => ({
    default: module.CategoriesAll,
  })),
);

const EnrollPrograms = lazy(() =>
  import("./pages/enroll/EnrollPrograms").then((module) => ({
    default: module.EnrollPrograms,
  })),
);

const NotFound = lazy(() =>
  import("./pages/error/not-found").then((module) => ({
    default: module.NotFound,
  })),
);

const Recursos = lazy(() =>
  import("./pages/recursos/Recursos").then((module) => ({
    default: module.Recursos,
  })),
);

const Conheca = lazy(() =>
  import("./pages/conheca/Conheca").then((module) => ({
    default: module.Conheca,
  })),
);

const About = lazy(() =>
  import("./pages/about/About").then((module) => ({
    default: module.About,
  })),
);

const Blogs = lazy(() =>
  import("./pages/home/blog/Blogs").then((module) => ({
    default: module.Blogs,
  })),
);

const BlogOne = lazy(() =>
  import("./pages/home/blog/BlogOne").then((module) => ({
    default: module.BlogOne,
  })),
);

const FalaAe = lazy(() =>
  import("./pages/falaae/FalaAe").then((module) => ({
    default: module.FalaAe,
  })),
);

const Aprender = lazy(() =>
  import("./pages/aprender/Aprender").then((module) => ({
    default: module.Aprender,
  })),
);

const Carreiras = lazy(() =>
  import("./pages/career/Career").then((module) => ({
    default: module.Carreiras,
  })),
);

const Termos = lazy(() =>
  import("./pages/docs/Termos").then((module) => ({
    default: module.Termos,
  })),
);

const Privacy = lazy(() =>
  import("./pages/docs/Privacidade").then((module) => ({
    default: module.Privacy,
  })),
);

function App() {
  return (
    <>
      <Router>
        <main className="w-full bg-neutral-50 flex min-h-screen flex-col text-neutral-500">
          {/* Navbar section */}
          <Navbar />

          {/* Routes */}
          {/* O fallback ocupa a tela inteira: com 60vh, o rodapé aparecia no meio da tela enquanto a página
              carregava e era empurrado para baixo quando ela chegava (CLS 0,40 no celular, #142). */}
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                Carregando...
              </div>
            }
          >
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Pages */}
              <Route path="/programs" element={<Programs />} />
              <Route path="/trilhas" element={<Trilhas />} />

              {/* Institutional Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Termos />} />
              <Route path="/careers" element={<Carreiras />} />
              <Route path="/aprender" element={<Aprender />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogOne />} />
              <Route path="/softskills" element={<Softskills />} />
              <Route path="/mentorias" element={<Mentorias />} />
              <Route path="/resources" element={<Recursos />} />
              <Route path="/conheca" element={<Conheca />} />
              <Route path="/about" element={<About />} />
              <Route path="/falaae" element={<FalaAe />} />
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
          </Suspense>

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
