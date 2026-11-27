import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import { LimiteDeErro } from "./components/common/LimiteDeErro";
import { FocoNaTroca } from "./components/common/FocoNaTroca";

/* As páginas carregam sob demanda. Se o pedaço de uma delas não baixar, o LimiteDeErro mostra "Recarregar" em vez
   da tela branca, e o erro é esquecido quando a pessoa navega para outro caminho (revisão R19, #154-2). */
function LimiteDasPaginas({ children }) {
  const { pathname } = useLocation();
  return <LimiteDeErro chave={pathname}>{children}</LimiteDeErro>;
}

// Páginas carregadas sob demanda
/* O botão "Voltar ao topo" só aparece depois de rolar: ele sai da entrada e chega junto com a página. */
const ScrollToTop = lazy(() => import("./components/common/ScrollToTop").then((m) => ({ default: m.ScrollToTop })));
/* Uma página sob demanda: o import() do pedaço e o export nomeado que vira o default do lazy(). */
const pagina = (carregar, nome) => lazy(() => carregar().then((modulo) => ({ default: modulo[nome] })));

const Home = pagina(() => import("./pages/home/Home"), "Home");

const Softskills = pagina(() => import("./pages/home/quickaccess/softskills/Softskills"), "Softskills");

const Mentorias = pagina(() => import("./pages/home/quickaccess/mentorias/Mentorias"), "Mentorias");

const Trilhas = pagina(() => import("./pages/trilhas/Trilhas"), "Trilhas");

const Programs = pagina(() => import("./pages/programs/Programs"), "Programs");

const Detail = pagina(() => import("./pages/detail/Detail"), "Detail");

const CategoriesAll = pagina(() => import("./pages/home/category/CategoriesAll"), "CategoriesAll");

const EnrollPrograms = pagina(() => import("./pages/enroll/EnrollPrograms"), "EnrollPrograms");

/* Rodapé sob demanda (learn-tech#152): ele fica abaixo da dobra, então sai da entrada e chega logo depois.
   Sem fallback: entra no fim da página e não empurra nada que já está na tela. */
const Footer = lazy(() => import("./components/footer/Footer"));

const NotFound = pagina(() => import("./pages/error/not-found"), "NotFound");

const Recursos = pagina(() => import("./pages/recursos/Recursos"), "Recursos");

const Conheca = pagina(() => import("./pages/conheca/Conheca"), "Conheca");

const About = pagina(() => import("./pages/about/About"), "About");

const Blogs = pagina(() => import("./pages/home/blog/Blogs"), "Blogs");

const BlogOne = pagina(() => import("./pages/home/blog/BlogOne"), "BlogOne");

const FalaAe = pagina(() => import("./pages/falaae/FalaAe"), "FalaAe");

const Aprender = pagina(() => import("./pages/aprender/Aprender"), "Aprender");

const Carreiras = pagina(() => import("./pages/career/Career"), "Carreiras");

const Termos = pagina(() => import("./pages/docs/Termos"), "Termos");

const Privacy = pagina(() => import("./pages/docs/Privacidade"), "Privacy");

function App() {
  return (
    <>
      <Router>
        {/* A cada troca de rota, o foco vai para o h1 da nova página, e o leitor de tela anuncia a troca (#194). */}
        <FocoNaTroca />
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

          {/* Button ToTop: sob demanda e, como o rodapé, dentro de um LimiteDeErro silencioso. Se o pedaço dele não
              baixar, só o botão some; sem o limite, o erro desmontava o app inteiro (R19 do #170, nota 3). */}
          <LimiteDeErro silencioso>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
          </LimiteDeErro>
        </main>
      </Router>
    </>
  );
}

export default App;
