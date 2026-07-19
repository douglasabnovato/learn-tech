import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import LearnTechTitle from "../logo/LearnTechTitle";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white space-y-16 py-16 md:px-16 sm:px-10 px-4">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
          >
            <LearnTechTitle size="text-3xl" color="text-purple-700" />
          </Link>
          <div className="space-y-2 pt-4 ps-2">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-500 to-purple-500 leading-snug">
              Comece a aprender aqui
            </h2>
            <p className="text-base text-neutral-400">
              O melhor lugar para descobrir novos recursos de aprendizagem,
              livros e cursos.
            </p>
          </div>
        </div>

        {/* Customer Support Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Sucesso</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/falaae"
                className="text-sm text-neutral-400 hover:text-white"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/falaae"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Fala aê
              </Link>
            </li>
            <li>
              <Link
                to="/aprender"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Resolvemos Juntos
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Carreiras
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Importantes</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="text-sm text-neutral-400 hover:text-white"
              >
                A Learn Tech
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Termos de Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Siga!</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://ocw.mit.edu"
                className="text-sm text-neutral-400 hover:text-white"
              >
                MIT OpenCourseWare —
              </a>
            </li>
            <li>
              <a
                href="https://cs50.harvard.edu"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Harvard CS50 —
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org"
                className="text-sm text-neutral-400 hover:text-white"
              >
                freeCodeCamp —
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org"
                className="text-sm text-neutral-400 hover:text-white"
              >
                MDN Web Docs —
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com"
                className="text-sm text-neutral-400 hover:text-white"
              >
                Stack Overflow —
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm mt-8 border-t border-neutral-700 pt-8">
        <p className="text-neutral-400">
          &copy; {new Date().getFullYear()}
          <span className="inline-block capitalize ml-1 mr-1">
            {new Date().toLocaleString("pt-BR", { month: "long" })}.
          </span>
          Learn TECH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
