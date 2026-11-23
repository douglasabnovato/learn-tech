/* programsMidia.js — a parte leve da reserva local dos programas (Decisão LIDER D121, learn-tech#148 A1).
   Capa, vídeo, pôster e status de cada programa de programsData.js, para os cards e o Detail sem a API.
   O resto (módulos, quiz e textos do Detail) fica em programsData.js, carregado sob demanda só quando a API falha.
   Os dois arquivos são conferidos um contra o outro em src/constants/dados.test.js. */
import Image1 from "./../assets/programs/1-program-curso-em-video.webp";
import Poster1 from "./../assets/programs/1-poster-demo.webp";

const Video1 = "https://www.youtube.com/embed/pWDF8csG9Qo";

/* id → mídia e status locais. */
export const MIDIA_LOCAL = {
  1: { image: Image1, video: Video1, videoPoster: Poster1, status: "lancado" },
  2: { image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg", status: "novidade" },
  3: { image: "https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg", status: "novidade" },
  4: { image: "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_1280.jpg", status: "novidade" },
  101: { image: "https://cdn.pixabay.com/photo/2015/09/06/00/17/macbook-926558_960_720.jpg", status: "lancado" },
  102: { image: "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg", status: "novidade" },
  103: { image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg", status: "novidade" },
  104: { image: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg", status: "novidade" },
  201: { image: "https://cdn.pixabay.com/photo/2015/06/01/09/04/phone-793046_960_720.jpg", status: "novidade" },
  202: { image: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg", status: "novidade" },
  203: { image: "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg", status: "novidade" },
  204: { image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg", status: "novidade" },
  301: { image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg", status: "novidade" },
  302: { image: "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg", status: "novidade" },
  303: { image: "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg", status: "novidade" },
  304: { image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg", status: "novidade" },
  401: { image: "https://cdn.pixabay.com/photo/2016/02/18/19/25/pc-1207886_640.jpg", status: "novidade" },
  402: { image: "https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664_1280.jpg", status: "novidade" },
  403: { image: "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_1280.jpg", status: "novidade" },
  404: { image: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg", status: "novidade" },
  501: { image: "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg", status: "novidade" },
  502: { image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg", status: "novidade" },
  503: { image: "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_1280.jpg", status: "novidade" },
  504: { image: "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg", status: "novidade" },
  601: { image: "https://cdn.pixabay.com/photo/2015/07/17/22/42/whiteboard-849803_960_720.jpg", status: "novidade" },
  602: { image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg", status: "novidade" },
  603: { image: "https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg", status: "novidade" },
  604: { image: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg", status: "novidade" },
  701: { image: "https://cdn.pixabay.com/photo/2016/08/03/21/38/london-1567903_960_720.jpg", status: "novidade" },
  702: { image: "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg", status: "novidade" },
  703: { image: "https://cdn.pixabay.com/photo/2015/09/06/00/17/macbook-926558_1280.jpg", status: "novidade" },
  704: { image: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg", status: "novidade" },
  801: { image: "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg", status: "lancado" },
};

/* Programas com as aulas (moduleContents) na cópia local: na reserva, só eles mostram "Aprenda". */
export const IDS_COM_CONTEUDO_LOCAL = new Set([1, 101, 801]);

/* Fim de programsMidia.js */
