/* Ícones da carga inicial (Navbar e ScrollToTop) em SVG próprio, com os mesmos desenhos do react-icons/io.
   Assim o react-icons sai do chunk inicial e só chega com as páginas que o usam (learn-tech#152). */
const Icone = ({ d, size = "1em", className, ...resto }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    className={className}
    aria-hidden="true"
    focusable="false"
    {...resto}
  >
    <path d={d} />
  </svg>
);

export const IconeMenu = (props) => (
  <Icone d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" {...props} />
);

export const IconeFechar = (props) => (
  <Icone
    d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
    {...props}
  />
);

export const IconeSetaCima = (props) => (
  <Icone
    d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
    {...props}
  />
);
