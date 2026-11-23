import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { LimiteDeErro } from "./components/common/LimiteDeErro";

/* As páginas carregam sob demanda. Se o pedaço de uma delas não baixar, o LimiteDeErro mostra "Recarregar" em vez
   da tela branca, e o erro é esquecido quando a pessoa navega para outro caminho (revisão R19, #154-2). */
function LimiteDasPaginas({ children }) {
  const { pathname } = useLocation();
  return <LimiteDeErro chave={pathname}>{children}</LimiteDeErro>;
}

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

/* Rodapé sob demanda (learn-tech#152): ele fica abaixo da dobra, então sai da entrada e chega logo depois.
   Sem fallback: entra no fim da página e não empurra nada que já está na tela. */
const Footer = lazy(() => import("./components/footer/Footer"));

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
          <LimiteDasPaginas>
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Carregando...</div>}>
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
                <Route path="/program/:category/:id/enroll" element={<EnrollPrograms />} />

                <Route path="/program/:category/:id" element={<Detail />} />

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </LimiteDasPaginas>

          {/* Footer Section: se o pedaço do rodapé não baixar, a página segue sem ele (revisão R19, #154-1). */}
          <LimiteDeErro silencioso>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </LimiteDeErro>

          {/* Button ToTop */}
          <ScrollToTop />
        </main>
      </Router>
    </>
  );
}

export default App;
