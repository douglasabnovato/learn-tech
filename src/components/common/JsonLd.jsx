import PropTypes from "prop-types";

/* Bloco JSON-LD na página (#131). "<" vira < para o texto do conteúdo nunca fechar a tag <script>. */
export const JsonLd = ({ dados }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }} />
);
JsonLd.propTypes = { dados: PropTypes.object.isRequired };

/* Fim de JsonLd.jsx */
