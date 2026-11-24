/* recolher.js: decide se o cabeçalho fixo se recolhe ao rolar (learn-tech#168).
   Com o texto ampliado (200%), o cabeçalho chega a 161 px e cobre 20% da tela no celular. Ele só se recolhe quando
   passa de LIMITE da altura da tela, ou seja, com fonte grande ou tela baixa: com o texto a 100% (80 px, 10%), nada
   muda. Rolando para baixo, ele sobe; rolando para cima, ele volta. Com o menu aberto, com o foco num link dele ou
   perto do topo, fica à vista. Movimentos menores que LIMIAR_PX não mudam o estado, para não piscar (R19 do #169). */
export const LIMITE = 0.15;
export const LIMIAR_PX = 8;

export function deveRecolher({ alturaCabecalho, alturaTela, y, yAnterior, menuAberto, focoDentro = false, recolhidoAntes = false }) {
  if (menuAberto || focoDentro || !alturaTela || alturaCabecalho / alturaTela <= LIMITE) return false;
  if (y <= alturaCabecalho) return false;
  if (Math.abs(y - yAnterior) < LIMIAR_PX) return recolhidoAntes;
  return y > yAnterior;
}
