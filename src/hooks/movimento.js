import { useEffect, useRef, useState } from 'react'

/* Quem pediu menos movimento recebe tudo estático. Consultado uma vez:
   a preferência não muda no meio da visita. */
export const REDUZ_MOVIMENTO =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ------------------------------------------------------------
   useEmQuadro — avisa quando o elemento entra em cena.
   `umaVez` desconecta depois do primeiro disparo: reveal não
   precisa ficar observando o resto da visita.
   ------------------------------------------------------------ */
export function useEmQuadro({ limiar = 0.16, margem = '0px 0px -40px 0px', umaVez = true } = {}) {
  const ref = useRef(null)
  const [emQuadro, setEmQuadro] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /* Rede de segurança: o conteúdo nasce em opacity:0 e só o observador
       o revela. Se o observador não existir ou não reportar, a página fica
       em branco — inaceitável numa página de vendas. Duas saídas:
       1) sem suporte a IntersectionObserver, mostra tudo na hora;
       2) se o elemento JÁ está no quadro na montagem, revela sem esperar
          o observador (que fica congelado enquanto a aba está oculta). */
    if (typeof IntersectionObserver === 'undefined') { setEmQuadro(true); return }
    const r = el.getBoundingClientRect()
    if (r.top < (window.innerHeight || 0) && r.bottom > 0) setEmQuadro(true)

    const io = new IntersectionObserver(([entrada]) => {
      if (entrada.isIntersecting) {
        setEmQuadro(true)
        if (umaVez) io.disconnect()
      } else if (!umaVez) {
        setEmQuadro(false)
      }
    }, { threshold: limiar, rootMargin: margem })
    io.observe(el)
    return () => io.disconnect()
  }, [limiar, margem, umaVez])

  return [ref, emQuadro]
}

/* ------------------------------------------------------------
   useContagem — conta de 0 até o alvo quando entra em quadro.
   Desaceleração cúbica: começa rápido e assenta no número.
   ------------------------------------------------------------ */
export function useContagem(alvo) {
  const [ref, emQuadro] = useEmQuadro({ limiar: 0.6 })
  const [n, setN] = useState(REDUZ_MOVIMENTO ? alvo : 0)

  useEffect(() => {
    if (!emQuadro || REDUZ_MOVIMENTO) return

    /* O número nasce em 0 e só sobe pelo requestAnimationFrame. Com a aba
       oculta o rAF fica congelado, e quem chegasse na página nesse estado
       leria "+0 bi" — pior do que não animar. Sem quadro para animar,
       entrega o valor final direto. */
    if (typeof document !== 'undefined' && document.hidden) { setN(alvo); return }

    let raf
    const inicio = performance.now()
    const dur = Math.min(2000, 900 + alvo * 8)   // número maior, contagem mais longa
    const passo = (t) => {
      const p = Math.min((t - inicio) / dur, 1)
      setN(Math.round(alvo * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(passo)
    }
    raf = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(raf)
  }, [emQuadro, alvo])

  return [ref, n]
}

/* ------------------------------------------------------------
   useRolagem — posição da rolagem em px e em %, num rAF só.
   ------------------------------------------------------------ */
export function useRolagem() {
  const [estado, setEstado] = useState({ y: 0, pct: 0 })

  useEffect(() => {
    let travado = false
    const medir = () => {
      const y = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setEstado({ y, pct: total > 0 ? (y / total) * 100 : 0 })
      travado = false
    }
    const aoRolar = () => {
      if (travado) return
      travado = true
      requestAnimationFrame(medir)
    }
    window.addEventListener('scroll', aoRolar, { passive: true })
    medir()
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return estado
}
