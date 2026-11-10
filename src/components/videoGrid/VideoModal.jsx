import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

const FOCAVEIS = 'button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const VideoModal = ({ video, onClose }) => {
    const caixaRef = useRef(null);
    const fecharRef = useRef(null);
    // onClose muda a cada render do pai; o ref evita refazer o efeito (e roubar o foco) a cada render.
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!video) return; // sem vídeo aberto, não mexe no scroll da página

        // Guarda quem abriu (o card do vídeo) para devolver o foco ao fechar.
        const quemAbriu = document.activeElement;
        fecharRef.current?.focus();

        const focaveis = () => [...(caixaRef.current?.querySelectorAll(FOCAVEIS) ?? [])];

        const handleKey = (e) => {
            if (e.key === "Escape") {
                onCloseRef.current();
                return;
            }
            if (e.key !== "Tab") return;
            const lista = focaveis();
            if (lista.length === 0) return;
            const primeiro = lista[0];
            const ultimo = lista[lista.length - 1];
            if (e.shiftKey && document.activeElement === primeiro) {
                e.preventDefault();
                ultimo.focus();
            } else if (!e.shiftKey && document.activeElement === ultimo) {
                e.preventDefault();
                primeiro.focus();
            }
        };

        // Rede de segurança: o Tab de dentro do iframe não passa pelo keydown desta página.
        const handleFocusIn = (e) => {
            if (caixaRef.current && !caixaRef.current.contains(e.target)) {
                fecharRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKey);
        document.addEventListener("focusin", handleFocusIn);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.removeEventListener("focusin", handleFocusIn);
            document.body.style.overflow = "auto";
            if (quemAbriu instanceof HTMLElement && document.contains(quemAbriu)) {
                quemAbriu.focus();
            }
        };
    }, [video]); // "video" entra na lista de dependências

    if (!video) return null;

    // Monta a URL de embed, incluindo o tempo de início quando informado no dado
    // youtube-nocookie: o YouTube só grava cookie quando a pessoa dá play (coerente com a página de privacidade).
    const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1${video.start ? `&start=${video.start}` : ""
        }`;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={video.title}
        >
            <div
                ref={caixaRef}
                className="w-full max-w-3xl space-y-3"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg pr-4 line-clamp-1">
                        {video.title}
                    </h3>
                    <button
                        ref={fecharRef}
                        onClick={onClose}
                        aria-label="Fechar vídeo"
                        className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        <FaXmark size={16} />
                    </button>
                </div>
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};