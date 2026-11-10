
// O tom 600 do ícone não dá contraste 4,5:1 em texto de 12 px sobre o fundo claro do card (axe, 10/11/2026).
// A etiqueta usa o tom 800 da mesma cor. Classes escritas por inteiro para o Tailwind gerá-las.
const TEXTO_800 = {
  "text-slate-600": "text-slate-800",
  "text-gray-600": "text-gray-800",
  "text-zinc-600": "text-zinc-800",
  "text-neutral-600": "text-neutral-800",
  "text-stone-600": "text-stone-800",
  "text-red-600": "text-red-800",
  "text-orange-600": "text-orange-800",
  "text-amber-600": "text-amber-800",
  "text-yellow-600": "text-yellow-800",
  "text-lime-600": "text-lime-800",
  "text-green-600": "text-green-800",
  "text-emerald-600": "text-emerald-800",
  "text-teal-600": "text-teal-800",
  "text-cyan-600": "text-cyan-800",
  "text-sky-600": "text-sky-800",
  "text-blue-600": "text-blue-800",
  "text-indigo-600": "text-indigo-800",
  "text-violet-600": "text-violet-800",
  "text-purple-600": "text-purple-800",
  "text-fuchsia-600": "text-fuchsia-800",
  "text-pink-600": "text-pink-800",
  "text-rose-600": "text-rose-800",
};
const corDoTexto = (iconColor) => TEXTO_800[iconColor] ?? "text-neutral-700";

export const StatsCard = ({
  icon: Icon,
  bgColor,
  borderColor,
  count,
  iconColor,
  description,
  category,
}) => {
  return (
    <div
      className={`w-full min-w-0 md:px-6 md:py-6 px-3 py-4 border rounded-xl ${bgColor} ${borderColor}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        {/* Bloco esquerdo: ícone + count + description */}
        <div className="min-w-0 flex items-center md:justify-start justify-center gap-4 md:flex-nowrap flex-wrap">
          <div
            className={`w-14 h-14 ${bgColor} border ${borderColor} rounded-xl flex items-center justify-center`}
          >
            <span className={`text-3xl font-bold ${iconColor}`}>
              <Icon aria-hidden="true" />
            </span>
          </div>
          <div className="flex items-center flex-col md:items-start space-y-0.5 md:text-start text-center">
            <h3 className="text-2xl font-bold text-neutral-800 md:text-start text-center">
              {count}
            </h3>
            <p className="text-base text-neutral-600">{description}</p>
          </div>
        </div>

        {/* Canto direito: categoria */}
        {category && (
          <span
            className={`min-w-0 max-w-full text-xs font-medium capitalize px-2 py-0.5 rounded-full border ${borderColor} ${corDoTexto(iconColor)} bg-white/50 break-words`}
          >
            {category}
          </span>
        )}
      </div>
    </div>
  );
};