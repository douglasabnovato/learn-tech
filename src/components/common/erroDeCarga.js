/* erroDeCarga.js: diz se um erro é a falha de carga de um pedaço sob demanda (learn-tech#157-3).
   Cobre as mensagens do Chrome, do Firefox e do Safari, e o nome usado pelo webpack. */
const ERRO_DE_CARGA = /dynamically imported module|importing a module script failed|ChunkLoadError|Loading chunk/i;

export const ehErroDeCarga = (erro) => ERRO_DE_CARGA.test(`${erro?.name ?? ""} ${erro?.message ?? ""}`);
