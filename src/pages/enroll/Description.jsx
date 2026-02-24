import PropTypes from "prop-types";
import { TabContent } from "./tabContent/TabContent";

export const Description = ({ program, onCompleteModule, completedModuleIndex }) => {
  const enrollDetails = program?.enrollDetails;

  if (!enrollDetails) {
    return <div className="text-center p-8">Carregando conteúdo...</div>;
  }

  const {
    categoryBadge,
    mainTitle,
    introductionParagraphs,
    courseAboutTitle,
    courseAboutDescription,
    moduleOverviews,
    transitionText,
  } = enrollDetails;

  return (
    <div className="w-full space-y-16">
      {/* Title Section */}
      <div className="w-full space-y-2">
        <p className="text-sm text-neutral-600 font-normal bg-neutral-200/60 border border-neutral-100 rounded-full w-fit px-3 py-1">
          {categoryBadge}
        </p>
        <h1 className="text-2xl text-neutral-800 font-semibold">
          {mainTitle}
        </h1>

        {/* Parágrafos Introdutórios Dinâmicos */}
        {introductionParagraphs?.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-base text-neutral-600 font-normal leading-relaxed max-w-4xl"
          >
            {paragraph.text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <span key={i} className="font-bold">
                    {part.replace(/\*\*/g, "")}
                  </span>
                );
              }
              return part;
            })}
          </p>
        ))}

        <div className="w-full space-y-8">
          {/* Seção Sobre o Curso */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-800 tracking-tight">
              {courseAboutTitle}
            </h2>
            <p className="text-sm font-normal text-neutral-600 leading-relaxed text-justify">
              {courseAboutDescription}
            </p>
          </div>

          {/* Seção Ementa Detalhada */}
          <div className="space-y-6">
            <h3 className="text-xl text-neutral-700 font-semibold border-b border-neutral-200 pb-2">
              O que você vai aprender
            </h3>

            <div className="grid gap-6">
              {/* Módulos Dinâmicos */}
              {moduleOverviews?.map((module) => (
                <div key={module.moduleId} className="space-y-2">
                  <h4 className="text-base font-bold text-neutral-800">
                    {module.title}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 px-2 text-sm text-neutral-600">
                    {module.items?.map((item, idx) => (
                      <li key={idx}>
                        <span className="font-semibold text-neutral-700">
                          {item.label}:
                        </span>{" "}
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de transição para as abas de conteúdo */}
        <div className="space-y-4">
          <p className="text-base text-neutral-600 font-normal leading-relaxed">
            {transitionText}
          </p>
        </div>
      </div>

      {/* Tab Section */}
      <TabContent
        program={program}
        onCompleteModule={onCompleteModule}
        completedModuleIndex={completedModuleIndex}
      />
    </div>
  );
};

Description.propTypes = {
  program: PropTypes.shape({
    enrollDetails: PropTypes.object,
  }),
  onCompleteModule: PropTypes.func,
  completedModuleIndex: PropTypes.number,
};
