import { Fragment } from 'react'
import { ANCORA, WHATSAPP, WHATSAPP_TEXTO } from '../config.js'
import { useEmQuadro } from '../hooks/movimento.js'
import Reveal from './Reveal.jsx'
import Icone from './Icone.jsx'
import { BotaoAplicar } from './Secoes.jsx'

/* A frase-âncora entra palavra por palavra, como cartela de abertura.
   É a primeira coisa que o empresário lê: precisa aterrissar devagar,
   não aparecer de uma vez como banner. */
function Ancora() {
  const [ref, emQuadro] = useEmQuadro({ limiar: 0.25 })
  const parte1 = 'A empresa é do tamanho que você é,'.split(' ')
  const parte2 = 'e não do tamanho que você quer.'.split(' ')
  let i = 0
  const palavra = (p) => (
    <Fragment key={p + i}>
      <span className="w" style={{ '--i': i++ }}>{p}</span>{' '}
    </Fragment>
  )
  return (
    <h1 ref={ref} className={`hero-ancora reveal${emQuadro ? ' viu' : ''}`}
        style={{ transitionDelay: '.1s' }}>
      <span className="lin">{parte1.map(palavra)}</span>{' '}
      <em className="lin">{parte2.map(palavra)}</em>
    </h1>
  )
}

export default function Hero() {
  const zap = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_TEXTO)}`
  return (
    <section className="hero">
      <div className="wrap hero-in">
        <Reveal as="p" className="eyebrow">Master Revolution · Móveis planejados</Reveal>

        <Ancora />

        <Reveal as="p" className="hero-sub" atraso={0.9}>
          A maioria dos donos de loja de planejados não tem um problema de mercado.
          Tem um problema de estrutura: vende sem processo, aperta a margem para não
          perder o cliente e carrega a operação inteira nas costas.
        </Reveal>

        <Reveal className="hero-ctas" atraso={1.0}>
          <BotaoAplicar classe="btn-g" />
          <a className="btn btn-fantasma btn-g" href={zap} target="_blank" rel="noopener">
            <Icone nome="chat" />
            Falar com a equipe
          </a>
        </Reveal>

        <Reveal className="hero-rodape" atraso={1.1}>
          <span><b>+1.300</b> empresários treinados</span>
          <i />
          <span>Brasil · <b>EUA</b> · México</span>
          <i />
          <span><b>1º</b> Mastermind do segmento</span>
        </Reveal>
      </div>

      <div className="hero-desce" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
