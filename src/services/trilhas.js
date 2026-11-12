/* trilhas.js — monta as trilhas por objetivo (#132): cada passo da API aponta para um programa ou artigo
   por id; aqui ele ganha título, link e tempo, e a trilha ganha o tempo total.
   Passo que não for encontrado no catálogo fica de fora (o build da API já impede isso). */

/* Minutos de uma duração de programa: "10h estimadas", "10hr e 30min", "6h". */
export function minutosDoPrograma(duracao) {
  const texto = String(duracao ?? "");
  const horas = Number(texto.match(/(\d+)\s*h/i)?.[1] ?? 0);
  const minutos = Number(texto.match(/(\d+)\s*min/i)?.[1] ?? 0);
  return horas * 60 + minutos;
}

/* Minutos de leitura de um artigo: "5 min". */
export function minutosDoArtigo(leitura) {
  return Number(String(leitura ?? "").match(/(\d+)\s*min/i)?.[1] ?? 0);
}

/* Texto curto de um tempo: "45 min", "10 h", "10 h 30 min". */
export function formatarTempo(minutos) {
  if (minutos < 60) return `${minutos} min`;
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

/* Resolve os passos de uma trilha com o catálogo de programas e a lista de artigos. */
export function montarTrilha(trilha, programas, artigos) {
  const passos = (trilha.passos ?? [])
    .map((p) => {
      if (p.tipo === "programa") {
        const prog = programas.find((x) => x.id === p.id);
        if (!prog) return null;
        const minutos = minutosDoPrograma(prog.duration);
        return { ...p, rotulo: "Programa", titulo: prog.title, link: `/program/${prog.categoryFilter}/${prog.id}`, minutos };
      }
      const art = artigos.find((x) => x.id === p.id);
      if (!art) return null;
      return { ...p, rotulo: "Artigo", titulo: art.title, link: art.blogURL || `/blog/${art.id}`, minutos: minutosDoArtigo(art.readingTime) };
    })
    .filter(Boolean);
  const total = passos.reduce((soma, p) => soma + p.minutos, 0);
  return { ...trilha, passos, total, tempo: `cerca de ${Math.round(total / 60)} h` };
}

/* Fim de trilhas.js */
