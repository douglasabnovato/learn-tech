import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

export const VideoModal = ({ video, onClose }) => {
    useEffect(() => {
        if (!video) return; // sem vídeo aberto, não mexe no scroll da página

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [video, onClose]); // "video" entra na lista de dependências

    if (!video) return null;

    // Monta a URL de embed, incluindo o tempo de início quando informado no dado
    const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1${video.start ? `&start=${video.start}` : ""
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
                className="w-full max-w-3xl space-y-3"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg pr-4 line-clamp-1">
                        {video.title}
                    </h3>
                    <button
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