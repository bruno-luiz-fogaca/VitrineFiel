/** Símbolo da marca: a janela de vistoria com o visto amarelo de "conferido". */
export function SimboloMarca({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 3v26M3 16h26" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M9.5 21.5l3 3 6-7"
        fill="none"
        stroke="var(--fita)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
