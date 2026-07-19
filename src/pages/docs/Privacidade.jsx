import React, { useEffect } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { lastUpdated, sections } from "../../constants/privacyData";

export const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen">
            {/* CABEÇALHO DE DOCUMENTO */}
            <div className="w-full border-b border-neutral-200 md:px-16 sm:px-10 px-4 md:py-16 py-10">
                <div className="max-w-3xl space-y-3">
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                        Documento legal
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-800">
                        Política de Privacidade
                    </h1>
                    <p className="text-sm text-neutral-500">
                        Última atualização: {lastUpdated}
                    </p>
                </div>
            </div>

            {/* AVISO — mesmo padrão do Terms.jsx */}
            <div className="w-full md:px-16 sm:px-10 px-4 pt-10">
                <div className="max-w-3xl mx-auto flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 px-5 py-4">
                    <FaTriangleExclamation className="text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-amber-900 leading-relaxed">
                        <strong>Aviso:</strong> este documento reflete com honestidade o
                        que a plataforma faz hoje, mas ainda não passou por revisão
                        jurídica profissional especializada em proteção de dados. Não
                        deve ser tratado como texto legal definitivo até essa revisão
                        ser concluída.
                    </p>
                </div>
            </div>

            {/* CORPO DO DOCUMENTO */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:py-16 py-10">
                <div className="max-w-3xl mx-auto space-y-12">
                    {sections.map((section) => (
                        <div key={section.id} className="space-y-3">
                            <h2 className="text-xl font-bold text-neutral-800">
                                {section.title}
                            </h2>
                            {section.content.map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className="text-base text-neutral-600 leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};