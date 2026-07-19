import React, { useState } from "react";
import {
    FaChevronDown,
    FaCircleQuestion,
    FaLightbulb,
    FaBug,
    FaUserGroup,
    FaEllipsis,
    FaCheck,
    FaArrowRight,
    FaArrowLeft,
    FaPaperPlane,
} from "react-icons/fa6";
import faqData from "../../constants/falaaeData";

const motivos = [
    {
        id: "duvida-programa",
        label: "Dúvida sobre um programa",
        icon: FaCircleQuestion,
        placeholder: "Qual programa e o que você gostaria de entender melhor?",
    },
    {
        id: "sugestao-conteudo",
        label: "Sugestão de conteúdo ou trilha nova",
        icon: FaLightbulb,
        placeholder: "Qual tecnologia ou tema você gostaria de ver aqui?",
    },
    {
        id: "problema-tecnico",
        label: "Encontrei um problema técnico",
        icon: FaBug,
        placeholder: "O que aconteceu? Em qual página ou funcionalidade?",
    },
    {
        id: "area-membros",
        label: "Quero saber sobre a área de membros",
        icon: FaUserGroup,
        placeholder: "O que você gostaria de saber sobre a área de membros?",
    },
    {
        id: "outro",
        label: "Outro assunto",
        icon: FaEllipsis,
        placeholder: "Conte com os detalhes que achar importante.",
    },
];

const TOTAL_STEPS = 4;

export const FalaAe = () => {
    // ---- FAQ (acordeão) ----
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

    // ---- Formulário em etapas ----
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        motivo: "",
        mensagem: "",
        nome: "",
        email: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const selectedMotivo = motivos.find((m) => m.id === formData.motivo);

    const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    const goBack = () => setStep((s) => Math.max(s - 1, 1));

    const canAdvanceStep1 = Boolean(formData.motivo);
    const canAdvanceStep2 = formData.mensagem.trim().length > 0;
    const canAdvanceStep3 =
        formData.nome.trim().length > 0 && formData.email.trim().length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Sem backend próprio ainda — este form precisa de um destino
        // (ex: Formspree) no atributo action, como fizemos na landing page
        // do Golada. Por ora, simula o envio no front.
        setSubmitted(true);
    };

    return (
        <div className="w-full min-h-screen">
            {/* HERO */}
            <div className="w-full bg-gradient-to-tr from-indigo-500/20 via-sky-700/20 via-20% to-purple-700/30 md:px-16 sm:px-10 px-4 md:py-24 py-16">
                <div className="max-w-3xl space-y-6">
                    <p className="text-lg md:text-xl font-medium text-neutral-600">
                        Fala aê
                    </p>
                    <h1 className="md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 leading-[1.15]">
                        Dúvida, sugestão, ou só quer trocar uma ideia?
                    </h1>
                    <p className="text-lg font-normal text-neutral-800 max-w-2xl">
                        Antes de escrever, dá uma olhada nas perguntas mais comuns aqui
                        embaixo — pode ser que sua resposta já esteja pronta. Se não
                        estiver, o formulário logo depois vai direto para a equipe.
                    </p>
                </div>
            </div>

            {/* FAQ — acordeão */}
            <div className="w-full md:px-16 sm:px-10 px-4 md:py-20 py-14">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-2xl font-bold text-neutral-800">
                        Perguntas frequentes
                    </h2>

                    <div className="space-y-3">
                        {faqData.map((item) => {
                            const isOpen = openFaq === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${isOpen
                                            ? "border-indigo-300 bg-indigo-50/40"
                                            : "border-neutral-200 bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(item.id)}
                                        className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${isOpen
                                                        ? "bg-gradient-to-tr from-indigo-500 to-purple-600 text-white"
                                                        : "bg-neutral-100 text-neutral-500"
                                                    }`}
                                            >
                                                {item.id}
                                            </span>
                                            <h3 className="text-base font-bold text-neutral-800">
                                                {item.question}
                                            </h3>
                                        </div>
                                        <FaChevronDown
                                            className={`shrink-0 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-600" : ""
                                                }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 pl-[4.5rem] animate-in fade-in duration-300">
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FORMULÁRIO — 4 etapas */}
            <div className="w-full bg-neutral-50 border-t border-neutral-200 md:px-16 sm:px-10 px-4 md:py-20 py-14">
                <div className="max-w-2xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-neutral-800">
                            Não achou o que precisava?
                        </h2>
                        <p className="text-base text-neutral-600">
                            Conta pra gente em poucos passos — a equipe idealizadora lê
                            cada mensagem.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 via-sky-600 to-purple-600 p-8 text-center space-y-3">
                            <FaCheck className="text-white text-3xl mx-auto" />
                            <h3 className="text-xl font-bold text-white">
                                Mensagem enviada!
                            </h3>
                            <p className="text-indigo-50 text-sm max-w-md mx-auto">
                                Obrigado por falar com a gente. A equipe vai responder no
                                e-mail que você informou.
                            </p>
                        </div>
                    ) : (
                        <div className="rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 space-y-8">
                            {/* Barra de progresso das etapas */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                                        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                                    />
                                </div>
                                <span className="text-sm font-medium text-neutral-500 shrink-0">
                                    Etapa {step} de {TOTAL_STEPS}
                                </span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* ETAPA 1 — motivo */}
                                {step === 1 && (
                                    <div className="space-y-4 animate-in fade-in duration-300">
                                        <h3 className="text-lg font-bold text-neutral-800">
                                            Qual o motivo do seu contato?
                                        </h3>
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                                            {motivos.map((motivo) => {
                                                const Icon = motivo.icon;
                                                const isSelected = formData.motivo === motivo.id;
                                                return (
                                                    <button
                                                        type="button"
                                                        key={motivo.id}
                                                        onClick={() =>
                                                            setFormData({ ...formData, motivo: motivo.id })
                                                        }
                                                        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${isSelected
                                                                ? "border-indigo-400 bg-indigo-50 ring-1 ring-indigo-300"
                                                                : "border-neutral-200 hover:border-neutral-300"
                                                            }`}
                                                    >
                                                        <span
                                                            className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center ${isSelected
                                                                    ? "bg-gradient-to-tr from-indigo-500 to-purple-600 text-white"
                                                                    : "bg-neutral-100 text-neutral-500"
                                                                }`}
                                                        >
                                                            <Icon size={14} />
                                                        </span>
                                                        <span className="text-sm font-semibold text-neutral-800">
                                                            {motivo.label}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* ETAPA 2 — detalhe */}
                                {step === 2 && (
                                    <div className="space-y-4 animate-in fade-in duration-300">
                                        <h3 className="text-lg font-bold text-neutral-800">
                                            Conte com mais detalhe
                                        </h3>
                                        <textarea
                                            rows={5}
                                            value={formData.mensagem}
                                            onChange={(e) =>
                                                setFormData({ ...formData, mensagem: e.target.value })
                                            }
                                            placeholder={
                                                selectedMotivo?.placeholder ||
                                                "Conte o que você precisa."
                                            }
                                            className="w-full rounded-xl border border-neutral-300 p-4 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 resize-none"
                                        />
                                    </div>
                                )}

                                {/* ETAPA 3 — dados */}
                                {step === 3 && (
                                    <div className="space-y-4 animate-in fade-in duration-300">
                                        <h3 className="text-lg font-bold text-neutral-800">
                                            Seus dados
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                                    Nome
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.nome}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, nome: e.target.value })
                                                    }
                                                    placeholder="Seu nome"
                                                    className="w-full rounded-xl border border-neutral-300 p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                                    E-mail
                                                </label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    placeholder="seu@email.com"
                                                    className="w-full rounded-xl border border-neutral-300 p-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ETAPA 4 — revisão */}
                                {step === 4 && (
                                    <div className="space-y-4 animate-in fade-in duration-300">
                                        <h3 className="text-lg font-bold text-neutral-800">
                                            Revise antes de enviar
                                        </h3>
                                        <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-semibold text-neutral-500 uppercase">
                                                    Motivo
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    className="text-xs text-indigo-600 font-semibold hover:underline"
                                                >
                                                    Editar
                                                </button>
                                            </div>
                                            <p className="text-sm text-neutral-800 font-medium">
                                                {selectedMotivo?.label}
                                            </p>
                                            <div className="h-px bg-neutral-200" />
                                            <span className="text-xs font-semibold text-neutral-500 uppercase">
                                                Mensagem
                                            </span>
                                            <p className="text-sm text-neutral-700 leading-relaxed">
                                                {formData.mensagem}
                                            </p>
                                            <div className="h-px bg-neutral-200" />
                                            <span className="text-xs font-semibold text-neutral-500 uppercase">
                                                Contato
                                            </span>
                                            <p className="text-sm text-neutral-700">
                                                {formData.nome} · {formData.email}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Navegação entre etapas */}
                                <div className="flex items-center justify-between pt-2">
                                    <button
                                        type="button"
                                        onClick={goBack}
                                        disabled={step === 1}
                                        className="flex items-center gap-2 text-sm font-semibold text-neutral-500 disabled:opacity-0 disabled:pointer-events-none hover:text-neutral-700"
                                    >
                                        <FaArrowLeft size={12} /> Voltar
                                    </button>

                                    {step < TOTAL_STEPS ? (
                                        <button
                                            type="button"
                                            onClick={goNext}
                                            disabled={
                                                (step === 1 && !canAdvanceStep1) ||
                                                (step === 2 && !canAdvanceStep2) ||
                                                (step === 3 && !canAdvanceStep3)
                                            }
                                            className="flex items-center gap-2 bg-gradient-to-tr from-indigo-500 via-sky-700 to-purple-700 text-white font-semibold text-sm py-2.5 px-6 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                                        >
                                            Continuar <FaArrowRight size={12} />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="flex items-center gap-2 bg-gradient-to-tr from-indigo-500 via-sky-700 to-purple-700 text-white font-semibold text-sm py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity"
                                        >
                                            Enviar mensagem <FaPaperPlane size={12} />
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};