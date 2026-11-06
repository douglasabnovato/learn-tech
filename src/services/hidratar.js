/* hidratar.js — adaptador da API com o registro de ícones (react-icons). Fica fora de api.js para que só as
   páginas que mostram ícones por nome (sobre, aprender, carreira, estatísticas, categorias, programas)
   baixem o registro. */
import { criarHidratar } from "./api";
import { ICONES } from "../constants/icones";

/* Percorre o dado da API: ícone por nome vira componente e /media/ vira URL absoluta. */
export const hidratar = criarHidratar(ICONES);

/* Fim de hidratar.js */
