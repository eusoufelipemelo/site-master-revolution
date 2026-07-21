import { MENU, WHATSAPP, LINK_SISTEMA } from './config.js'
import { useRolagem, REDUZ_MOVIMENTO } from './hooks/movimento.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Galeria from './components/Galeria.jsx'
import Faq from './components/Faq.jsx'
import Contato from './components/Contato.jsx'
import { Sistema, Jornada, Numeros, Seguranca, Idealizador, Depoimentos, CtaFinal } from './components/Secoes.jsx'
import { IconeWhatsapp } from './components/Icone.jsx'

/* Grão de filme, vinheta e as luzes de fundo: a camada que dá
   o acabamento de sala de projeção. */
function Atmosfera({ y }) {
  const desloca = (fator) => (REDUZ_MOVIMENTO ? undefined : { transform: `translateY(${y * fator}px)` })
  return (
    <>
      <div className="atmo" aria-hidden="true">
        <span className="orbe o1" style={desloca(0.12)} />
        <span className="orbe o2" style={desloca(-0.08)} />
        <span className="orbe o3" style={desloca(0.05)} />
        <span className="malha" />
      </div>
      <div className="grao" aria-hidden="true" />
      <div className="vinheta" aria-hidden="true" />
    </>
  )
}

function Whatsapp() {
  const destino = WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site do Master Revolution e quero saber mais.')}`
    : '#contato'
  const externo = WHATSAPP ? { target: '_blank', rel: 'noopener' } : {}
  return (
    <a className="zap" href={destino} aria-label="Falar no WhatsApp" {...externo}>
      <IconeWhatsapp />
    </a>
  )
}

function Rodape() {
  return (
    <footer className="rodape">
      <div className="wrap rodape-in">
        <div className="rodape-marca">
          <img src="/assets/logo-horizontal.svg" alt="Master Revolution" width="180" height="36" loading="lazy" />
          <p>Sistema de Implantação de Processos para lojas de móveis planejados.</p>
        </div>
        <nav className="rodape-links" aria-label="Links do rodapé">
          {MENU.filter(m => m.href !== '#contato' && m.href !== '#depoimentos')
               .map(m => <a key={m.href} href={m.href}>{m.texto}</a>)}
          <a href={LINK_SISTEMA} rel="noopener">Acessar Sistema</a>
        </nav>
      </div>
      <div className="wrap rodape-base">
        <span>© {new Date().getFullYear()} Master Revolution · Todos os direitos reservados</span>
        <a href="https://www.outboxgroup.com.br" target="_blank" rel="noopener">Desenvolvido por: OutBox Group</a>
      </div>
    </footer>
  )
}

export default function App() {
  const { y, pct } = useRolagem()

  return (
    <>
      <Atmosfera y={y} />
      <div className="progresso" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>

      <Navbar rolou={y > 24} />

      <main id="topo">
        <Hero />
        <Sistema />
        <Jornada />
        <Numeros />
        <Seguranca />
        <Idealizador />
        <Depoimentos />
        <Galeria />
        <Faq />
        <Contato />
        <CtaFinal />
      </main>

      <Rodape />
      <Whatsapp />
    </>
  )
}
