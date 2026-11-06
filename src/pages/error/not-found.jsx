import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCarCrash } from "react-icons/fa";
import { Seo } from "../../components/common/Seo";

// Página de erro: o servidor ainda responde 200 (reescrita da SPA no vercel.json), então o
// `noindex` é o que impede o Google de indexar a rota inexistente.
export const NotFound = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <Seo titulo="Página não encontrada" descricao="O endereço acessado não existe na learnTECH." noindex />
      <FaCarCrash size={60} className="text-yellow-500 mb-6" aria-hidden="true" />
      <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        O endereço pode ter mudado ou estar digitado errado. Veja os programas disponíveis ou
        fale com a gente se você chegou aqui por um link do site.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="px-6 py-3 bg-sky-700 text-white rounded-full font-semibold hover:bg-sky-800 transition-colors duration-300"
        >
          Voltar para o início
        </Link>
        <Link
          to="/programs"
          className="px-6 py-3 border border-sky-700 text-sky-800 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-300"
        >
          Ver programas
        </Link>
        <Link
          to="/falaae"
          className="px-6 py-3 border border-neutral-400 text-neutral-800 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-300"
        >
          Fala aê
        </Link>
      </div>
    </div>
  );
};
