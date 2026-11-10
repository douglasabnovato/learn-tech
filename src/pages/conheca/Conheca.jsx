/* Conheca.jsx: página /conheca, apresentação do learnTECH e dos quatro sites (issue #137).
   Textos em learntech-content (paginas/conheca.json), com a cópia gerada conhecaData.js como reserva.
   Os números vêm ao vivo do índice da API; sem API, o bloco de números não aparece. */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from "react-icons/fa6";
import conhecaLocal from "../../constants/conhecaData";
import { usePagina, useContagens } from "../../services/api";
import { Seo } from "../../components/common/Seo";

/* Cor de cada site, a mesma da marca de cada um. */
const COR = {
  "learn-tech": { faixa: "bg-indigo-600", texto: "text-indigo-700", fundo: "bg-indigo-50" },
  bootcamps: { faixa: "bg-green-600", texto: "text-green-700", fundo: "bg-green-50" },
  career: { faixa: "bg-orange-600", texto: "text-orange-700", fundo: "bg-orange-50" },
  tools: { faixa: "bg-amber-700", texto: "text-amber-800", fundo: "bg-amber-50" },
};

const ICONE_SOCIAL = { GitHub: FaGithub, LinkedIn: FaLinkedin };

const numero = (n) => (typeof n === "number" ? n.toLocaleString("pt-BR") : null);

/* Link interno (rota do site) ou externo (outro site do ecossistema, em nova aba). */
const Destino = ({ url, interno, className, children }) =>
  interno ? (
    <Link to={url} className={className}>
      {children}
    </Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );

export const Conheca = () => {
  const { seo, hero, numeros, projetos, origem, comoFeito, autor, fechamento } = usePagina("conheca", conhecaLocal);
  const contagens = useContagens() ?? {};
  const numerosVivos = numeros.itens.map((n) => ({ ...n, valor: numero(contagens[n.chave]) })).filter((n) => n.valor);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Seo titulo={seo.titulo} descricao={seo.descricao} caminho="/conheca" />

      {/* ABERTURA */}
      <section className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-24 py-16">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">{hero.eyebrow}</p>
          <h1 className="md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.15] text-balance">
            {hero.title}
          </h1>
          <p className="text-lg text-neutral-800 max-w-2xl leading-relaxed">{hero.subtitle}</p>
          <Link
            to={hero.cta.to}
            className="inline-flex items-center gap-2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 py-3 px-8 rounded-full font-semibold duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {hero.cta.label} <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* NÚMEROS AO VIVO */}
      {numerosVivos.length > 0 && (
        <section aria-labelledby="conheca-numeros" className="w-full md:px-16 sm:px-10 px-4 md:pt-16 pt-12">
          <div className="space-y-6">
            <h2 id="conheca-numeros" className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {numeros.titulo}
            </h2>
            <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {numerosVivos.map((n) => (
                <div key={n.chave} className="flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-white p-5">
                  <dt className="text-sm text-neutral-600">{n.rotulo}</dt>
                  <dd className="text-3xl font-bold text-neutral-800 tabular-nums order-first">{n.valor}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs text-neutral-500">{numeros.nota}</p>
          </div>
        </section>
      )}

      {/* OS QUATRO SITES */}
      <section aria-labelledby="conheca-projetos" className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-14 space-y-10">
        <h2 id="conheca-projetos" className="text-2xl md:text-3xl font-bold text-neutral-800">
          {projetos.titulo}
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {projetos.itens.map((p) => {
            const cor = COR[p.id] ?? COR["learn-tech"];
            const total = numero(contagens[p.chave]);
            return (
              <article key={p.id} className="flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden">
                <div className={`h-1.5 ${cor.faixa}`} aria-hidden="true" />
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${cor.fundo} ${cor.texto}`}>
                      {p.papel}
                    </span>
                    {total && (
                      <span className="text-sm text-neutral-500 tabular-nums">
                        {total} {p.rotulo}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800">{p.nome}</h3>
                  <p className="text-base text-neutral-600 leading-relaxed flex-1">{p.descricao}</p>
                  <Destino
                    url={p.url}
                    interno={p.interno}
                    className={`inline-flex items-center gap-2 font-semibold ${cor.texto} hover:underline w-fit`}
                  >
                    Abrir o {p.nome}
                    {p.interno ? <FaArrowRight aria-hidden="true" /> : <FaArrowUpRightFromSquare aria-hidden="true" className="text-sm" />}
                    {!p.interno && <span className="sr-only">(abre em nova aba)</span>}
                  </Destino>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* DE ONDE VEM O CONTEÚDO */}
      <section aria-labelledby="conheca-origem" className="w-full bg-neutral-900 md:px-16 sm:px-10 px-4 md:py-20 py-14">
        <div className="space-y-10">
          <h2 id="conheca-origem" className="text-2xl md:text-3xl font-bold text-white">
            {origem.titulo}
          </h2>
          <ol className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {origem.passos.map((passo, i) => (
              <li key={passo.titulo} className="space-y-2">
                <span className="text-sm font-semibold text-sky-300 tabular-nums">Passo {i + 1}</span>
                <h3 className="text-lg font-bold text-white">{passo.titulo}</h3>
                <p className="text-base text-neutral-300 leading-relaxed">{passo.descricao}</p>
              </li>
            ))}
          </ol>
          <Link to={origem.link.to} className="inline-flex items-center gap-2 font-semibold text-sky-300 hover:text-white">
            {origem.link.label} <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* COMO É FEITO */}
      <section aria-labelledby="conheca-como" className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-14 space-y-10">
        <h2 id="conheca-como" className="text-2xl md:text-3xl font-bold text-neutral-800">
          {comoFeito.titulo}
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {comoFeito.itens.map((item) => (
            <div key={item.titulo} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 space-y-2">
              <h3 className="text-base font-bold text-neutral-800">{item.titulo}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUEM FAZ */}
      <section aria-labelledby="conheca-autor" className="w-full md:px-16 sm:px-10 px-4 md:pb-20 pb-14">
        <div className="max-w-3xl space-y-4">
          <h2 id="conheca-autor" className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            {autor.titulo}
          </h2>
          <p className="text-2xl font-bold text-neutral-800">{autor.nome}</p>
          <p className="text-base text-neutral-600 leading-relaxed">{autor.texto}</p>
          <ul className="flex flex-wrap gap-3">
            {autor.links.map((l) => {
              const Icone = ICONE_SOCIAL[l.label];
              return (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-indigo-500 hover:text-indigo-700"
                  >
                    {Icone && <Icone aria-hidden="true" />}
                    {l.label}
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-20 py-14">
        <div className="max-w-2xl space-y-6">
          <h2 className="md:text-3xl text-2xl font-bold text-neutral-800 leading-tight text-balance">{fechamento.titulo}</h2>
          <Link
            to={fechamento.cta.to}
            className="inline-flex items-center gap-2 text-neutral-50 bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 py-3 px-8 rounded-full font-semibold duration-300 hover:opacity-90"
          >
            {fechamento.cta.label} <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

/* Fim de Conheca.jsx */
