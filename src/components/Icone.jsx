/* Ícones em SVG, nunca emoji. Todos no mesmo viewBox 24 para
   ficarem coerentes em qualquer tamanho. */
const TRACOS = {
  entrar:      <><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/></>,
  cadeado:     <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
  check:       <path d="M20 6 9 17l-5-5"/>,
  chat:        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>,
  livro:       <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
  organograma: <><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v4M5 17v-3h14v3"/></>,
  arquivo:     <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></>,
  pasta:       <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>,
  grafico:     <><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></>,
  escudo:      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  documento:   <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></>,
  globo:       <><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/></>,
  olho:        <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
  enviar:      <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
  fechar:      <path d="M18 6 6 18M6 6l12 12"/>,
  seta_esq:    <path d="m15 18-6-6 6-6"/>,
  seta_dir:    <path d="m9 18 6-6-6-6"/>,
  /* dores */
  'alvo-quebrado': <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m3 3 18 18"/></>,
  margem:      <><path d="M12 2v20"/><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  refem:       <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12h6"/></>,
  cego:        <><path d="M9.9 4.24A9.1 9.1 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path d="M6.6 6.6A18.5 18.5 0 0 0 1 12s4 8 11 8a9.1 9.1 0 0 0 5.4-1.6"/><path d="M2 2l20 20"/></>,
  /* solução */
  coroa:       <><path d="M3 18h18"/><path d="m3 6 4.5 4L12 4l4.5 6L21 6l-2 9H5Z"/></>,
  lideranca:   <><circle cx="12" cy="7" r="3"/><path d="M5 21v-1a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1"/><path d="M2 12h3M19 12h3"/></>,
  equipe:      <><circle cx="9" cy="8" r="3"/><path d="M2 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1"/><path d="M17 4a3 3 0 0 1 0 6M19 20v-1a5 5 0 0 0-2-4"/></>,
  clube:       <><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></>,
  metodo:      <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="m9 8 2 2 4-4"/></>,
  ano:         <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/></>,
  raio:        <path d="m13 2-9 12h7l-1 8 9-12h-7z"/>,
  estrela:     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>,
  aplicar:     <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></>
}

export default function Icone({ nome, ...props }) {
  const tracos = TRACOS[nome]
  if (!tracos) return null
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {tracos}
    </svg>
  )
}

export function Estrelas() {
  return (
    <div className="estrelas" aria-label="5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
        </svg>
      ))}
    </div>
  )
}

export function IconeWhatsapp() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.646.867 5.098 2.328 7.086L4.06 28.94l7.05-2.23a11.94 11.94 0 0 0 4.895 1.047c6.62 0 12.004-5.383 12.004-12.004C28.008 8.383 22.625 3 16.004 3zm0 21.93a9.9 9.9 0 0 1-5.055-1.383l-.363-.215-4.184 1.324 1.336-4.078-.238-.375a9.9 9.9 0 0 1-1.53-5.2c0-5.485 4.464-9.949 9.95-9.949 5.484 0 9.948 4.464 9.948 9.95 0 5.484-4.464 9.948-9.949 9.948zm5.457-7.449c-.3-.15-1.77-.873-2.043-.973-.274-.1-.474-.15-.673.15-.2.3-.774.973-.948 1.172-.175.2-.35.225-.65.075-.3-.15-1.263-.465-2.405-1.484-.889-.792-1.489-1.77-1.663-2.07-.175-.3-.019-.462.13-.611.135-.134.3-.35.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.673-1.622-.922-2.221-.243-.583-.49-.504-.673-.513l-.573-.01c-.2 0-.524.075-.798.375-.274.3-1.048 1.023-1.048 2.495s1.073 2.895 1.222 3.095c.15.2 2.11 3.222 5.114 4.518.714.308 1.272.492 1.706.63.717.228 1.37.196 1.886.119.575-.086 1.77-.724 2.02-1.423.248-.698.248-1.297.173-1.422-.074-.125-.274-.2-.573-.35z"/>
    </svg>
  )
}
