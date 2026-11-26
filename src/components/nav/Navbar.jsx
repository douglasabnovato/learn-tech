import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconeFechar, IconeMenu } from "../common/IconesDaEntrada";
import navLocal from "../../constants/navbarData";
import { usePagina } from "../../services/api";
import LearnTechTitle from "../logo/LearnTechTitle";
import { deveRecolher, LIMIAR_PX } from "./recolher";

const Navbar = () => {
  const { itens: navItems } = usePagina("navegacao", { itens: navLocal });
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  // Com fonte grande, o cabeçalho se recolhe ao rolar para baixo e volta ao rolar para cima (learn-tech#168).
  const [recolhido, setRecolhido] = useState(false);
  const cabecalho = useRef(null);
  const yAnterior = useRef(0);
  const menuAberto = useRef(false);
  const botaoAbrir = useRef(null);
  menuAberto.current = isOpen;

  const location = useLocation(); // Rota atual, para destacar o item ativo

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Fechar pelo "Fechar menu" ou pelo Escape devolve o foco ao "Abrir menu". Sem isso, o botão focado some
  // com o painel e o foco cai no body (R19 do learn-tech#184). Ao seguir um link, o foco fica com a navegação.
  const fecharEVoltar = () => {
    setIsOpen(false);
    botaoAbrir.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const aoTeclar = (e) => {
      if (e.key === "Escape") fecharEVoltar();
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [isOpen]);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    const y = window.scrollY;
    setRecolhido((antes) =>
      deveRecolher({
        alturaCabecalho: cabecalho.current?.offsetHeight ?? 0,
        alturaTela: window.innerHeight,
        y,
        yAnterior: yAnterior.current,
        menuAberto: menuAberto.current,
        focoDentro: Boolean(cabecalho.current?.contains(document.activeElement)),
        recolhidoAntes: antes,
      }),
    );
    // O y de referência só anda quando o movimento passa do limiar: rolagens lentas somam até mudar o estado.
    if (Math.abs(y - yAnterior.current) >= LIMIAR_PX || y <= 0) yAnterior.current = y;
  };

  // Adding event listener on mount and removing on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      ref={cabecalho}
      // O foco pelo teclado no menu traz o cabeçalho de volta.
      onFocus={() => setRecolhido(false)}
      className={`w-full h-cabecalho backdrop-blur-sm flex items-center justify-between md:px-16 sm:px-10 px-4 fixed top-0 transition-all ease-in-out duration-300 motion-reduce:transition-none z-50 ${
        isScrolled ? "bg-sky-50/30 border-b border-neutral-200" : "bg-transparent"
      } ${recolhido ? "-translate-y-full" : ""}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 md:pr-16 pr-0">
        <Link to="/" className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
          <LearnTechTitle size="text-3xl" color="text-purple-700" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}

      <div className="md:hidden">
        <button
          ref={botaoAbrir}
          type="button"
          onClick={toggleNavbar}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          className="p-2 -m-2 text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded"
        >
          <IconeMenu size={28} />
        </button>
      </div>

      {/* Navbar items and buttons */}
      {/* Fechado no celular, o menu fica fora da tela e invisível: sem isso, o Tab passava por 8 links que não se veem
          (WCAG 2.4.7). Ao fechar, a visibilidade entra na transição e o menu some só no fim do deslize; ao abrir,
          fica visível na hora, para o Tab logo depois do Enter já entrar nele. */}
      <div
        id="menu-principal"
        className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-sky-50 border-l md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none duration-300 ease-in-out transform flex-1 ${
          isOpen ? "translate-x-0 transition-transform" : "translate-x-full max-md:invisible transition-[transform,visibility]"
        } md:translate-x-0 z-60`}
      >
        {/* Logo and close icon Inside Toggle Menu */}
        <div className="w-full md:hidden flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
            <LearnTechTitle size="text-3xl" color="text-purple-700" />
          </Link>

          {/* Close Icon */}
          <div className="md:hidden flex justify-end py-6">
            <button
              type="button"
              onClick={fecharEVoltar}
              aria-label="Fechar menu"
              aria-controls="menu-principal"
              className="p-2 -m-2 text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded"
            >
              <IconeFechar size={28} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-300 md:hidden"></div>

        <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
          {/* Navbar items */}
          <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-base text-lg text-neutral-700 md:font-normal font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={closeNavbar}
                  className={`hover:text-sky-700 ease-in-out duration-300 ${
                    location.pathname === item.path
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
