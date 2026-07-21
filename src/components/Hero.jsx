import { Fragment, useRef } from 'react'
import { LINK_SISTEMA, MOCK_BARRAS, MOCK_IMPLANTACAO, FAIXA } from '../config.js'
import { useEmQuadro, useContagem, REDUZ_MOVIMENTO } from '../hooks/movimento.js'
import Reveal from './Reveal.jsx'
import Icone from './Icone.jsx'

/* Cartela de abertura: cada palavra sobe no seu tempo. */
function Titulo() {
  const [ref, emQuadro] = useEmQuadro({ limiar: 0.3 })
  const linha1 = 'Pare de carregar a loja nas costas.'.split(' ')
  const linha2 = 'Implante processo.'.split(' ')
  let i = 0
  // o espaço fica FORA do span: dentro de um inline-block ele colapsa
  // e as palavras grudam ("Paredecarregara")
  const palavra = (p) => (
    <Fragment key={p + i}>
      <span className="w" style={{ '--i': i++ }}>{p}</span>{' '}
    </Fragment>
  )
  return (
    <h1 ref={ref} className={`reveal${emQuadro ? ' viu' : ''}`} style={{ transitionDelay: '.12s' }}>
      <span className="lin">{linha1.map(palavra)}</span>
      <br />
      <em className="lin">{linha2.map(palavra)}</em>
    </h1>
  )
}

function Estatistica({ valor, rotulo }) {
  const [ref, n] = useContagem(valor)
  return <div><dt ref={ref}>{n}</dt><dd>{rotulo}</dd></div>
}

/* Painel do sistema desenhado em CSS: nunca fica desatualizado
   como ficaria um screenshot. */
function Mockup() {
  const [ref, emQuadro] = useEmQuadro({ limiar: 0.3 })
  const janelaRef = useRef(null)
  const comprimento = 2 * Math.PI * 50            // r=50 no viewBox
  const [pctRef, pct] = useContagem(MOCK_IMPLANTACAO)

  // a janela acompanha o mouse de leve, como câmera na mão
  const seguirMouse = (ev) => {
    if (REDUZ_MOVIMENTO || !window.matchMedia('(pointer:fine)').matches) return
    const j = janelaRef.current
    const r = ev.currentTarget.getBoundingClientRect()
    j.style.setProperty('--tx', (((ev.clientX - r.left) / r.width) - 0.5) * 7)
    j.style.setProperty('--ty', (((ev.clientY - r.top) / r.height) - 0.5) * -7)
  }
  const soltarMouse = () => {
    const j = janelaRef.current
    if (!j) return
    j.style.setProperty('--tx', 0)
    j.style.setProperty('--ty', 0)
  }

  return (
    <div ref={ref} className={`hero-mock reveal${emQuadro ? ' viu' : ''}`}
         style={{ transitionDelay: '.24s' }} aria-hidden="true"
         onPointerMove={seguirMouse} onPointerLeave={soltarMouse}>
      <div className="mock-janela" ref={janelaRef}>
        <div className="mock-top">
          <i /><i /><i /><span>gestao.masterrevolution.com.br</span>
        </div>
        <div className="mock-corpo">
          <div className="mock-sb">
            <span className="mk-logo" />
            <span className="mk-item on" />
            <span className="mk-item" /><span className="mk-item" /><span className="mk-item" />
            <span className="mk-item curto" />
          </div>
          <div className="mock-main">
            <div className="mock-anel">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" className="anel-tras" />
                <circle cx="60" cy="60" r="50" className="anel-frente"
                        style={{ strokeDashoffset: emQuadro ? comprimento * (1 - MOCK_IMPLANTACAO / 100) : comprimento }} />
              </svg>
              <b ref={pctRef}>{pct}%</b>
              <small>implantação</small>
            </div>
            <div className="mock-barras">
              {MOCK_BARRAS.map(b => (
                <div className="mk-b" key={b.nome}>
                  <span>{b.nome}</span>
                  <i style={{ '--w': `${b.pct}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mock-chip chip-a"><Icone nome="check" />Tarefa concluída</div>
      <div className="mock-chip chip-b"><Icone nome="chat" />Karol: nova mensagem</div>
    </div>
  )
}

export default function Hero() {
  const [ref, emQuadro] = useEmQuadro({ limiar: 0.3 })
  return (
    <section className={`hero${emQuadro ? ' ligou' : ''}`} ref={ref}>
      <div className="wrap hero-grid">
        <div className="hero-txt">
          <Reveal as="p" className="eyebrow">Sistema de Implantação de Processos</Reveal>
          <Titulo />
          <Reveal as="p" className="hero-sub" atraso={0.24}>
            A plataforma exclusiva dos mentorados do Master Revolution para implantar
            os 10 processos e os 8 pilares na sua loja de móveis planejados, com a equipe
            acompanhando cada passo de perto.
          </Reveal>
          <Reveal className="hero-ctas" atraso={0.36}>
            <a className="btn btn-primario btn-g" href={LINK_SISTEMA} rel="noopener">
              <Icone nome="cadeado" />Acessar Sistema
            </a>
            <a className="btn btn-fantasma btn-g" href="#sistema">Conhecer por dentro</a>
          </Reveal>
          <Reveal as="dl" className="hero-stats" atraso={0.48}>
            <Estatistica valor={10} rotulo="processos" />
            <Estatistica valor={8} rotulo="pilares" />
            <Estatistica valor={3} rotulo="idiomas" />
            <div><dt>24/7</dt><dd>na nuvem</dd></div>
          </Reveal>
        </div>
        <Mockup />
      </div>

      {/* duas voltas idênticas: o marquee corre -50% e emenda sem costura */}
      <div className="faixa" aria-hidden="true">
        <div className="faixa-trilho">
          {[0, 1].map(volta =>
            FAIXA.map(t => (
              <Fragment key={`${volta}-${t}`}>
                <span>{t}</span><i />
              </Fragment>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
