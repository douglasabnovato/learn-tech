/* recolher.js: decide se o cabeçalho fixo se recolhe ao rolar (learn-tech#168).
   Com o texto ampliado (200%), o cabeçalho chega a 161 px e cobre 20% da tela no celular. Ele só se recolhe quando
   passa de LIMITE da altura da tela, ou seja, com fonte grande ou tela baixa: com o texto a 100% (80 px, 10%), nada
   muda. Rolando para baixo, ele sobe; rolando para cima, ele volta. Com o menu aberto ou perto do topo, fica à vista. */
export const LIMITE = 0.15;

export function deveRecolher({ alturaCabecalho, alturaTela, y, yAnterior, menuAberto, recolhidoAntes = false }) {
  if (menuAberto || !alturaTela || alturaCabecalho / alturaTela <= LIMITE) return false;
  if (y <= alturaCabecalho) return false;
  if (y > yAnterior) return true;
  if (y < yAnterior) return false;
  return recolhidoAntes;
}
