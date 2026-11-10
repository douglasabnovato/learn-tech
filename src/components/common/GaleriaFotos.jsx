/* GaleriaFotos.jsx — galeria de fotos do programa e do artigo (campo `galeria` da API, ADR 12).
 * Miniaturas em grade; o clique amplia a foto num <dialog> nativo, que prende o foco e fecha com Esc. */
import { useRef, useState } from "react";

export const GaleriaFotos = ({ fotos, titulo = "Galeria" }) => {
  const dialogo = useRef(null);
  const [aberta, setAberta] = useState(0);
  if (!Array.isArray(fotos) || fotos.length === 0) return null;

  const abrir = (i) => {
    setAberta(i);
    dialogo.current?.showModal();
  };
  const mover = (passo) => setAberta((i) => (i + passo + fotos.length) % fotos.length);
  const atual = fotos[aberta];

  return (
    <section aria-label={titulo} className="w-full space-y-4">
      <h2 className="text-2xl font-bold text-neutral-800">{titulo}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {fotos.map((foto, i) => (
          <li key={foto.url}>
            <button
              type="button"
              onClick={() => abrir(i)}
              aria-label={`Ampliar foto ${i + 1} de ${fotos.length}: ${foto.alt}`}
              className="block w-full overflow-hidden rounded-xl border border-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <img
                src={foto.url}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-contain bg-neutral-100 hover:scale-105 transition-transform"
              />
            </button>
            {foto.legenda && <p className="mt-1 text-xs text-neutral-500">{foto.legenda}</p>}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogo}
        aria-label={`${titulo}: foto ampliada`}
        onClick={(e) => e.target === dialogo.current && dialogo.current.close()}
        className="m-auto max-w-5xl w-[92vw] rounded-2xl bg-neutral-900 p-4 backdrop:bg-black/80"
      >
        {atual && (
          <figure className="space-y-3">
            <img src={atual.url} alt={atual.alt} className="max-h-[75vh] w-full object-contain rounded-lg" />
            <figcaption className="text-sm text-neutral-200">
              {aberta + 1} de {fotos.length} · {atual.legenda || atual.alt}
            </figcaption>
          </figure>
        )}
        <div className="mt-3 flex justify-end gap-2">
          {fotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => mover(-1)}
                aria-label="Foto anterior"
                className="rounded-full bg-neutral-700 px-4 py-2 text-white"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => mover(1)}
                aria-label="Próxima foto"
                className="rounded-full bg-neutral-700 px-4 py-2 text-white"
              >
                →
              </button>
            </>
          )}
          <button type="button" onClick={() => dialogo.current?.close()} className="rounded-full bg-white px-4 py-2 text-neutral-900">
            Fechar
          </button>
        </div>
      </dialog>
    </section>
  );
};
