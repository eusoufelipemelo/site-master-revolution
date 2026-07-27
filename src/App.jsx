import { MENU, WHATSAPP, WHATSAPP_TEXTO, LINK_SISTEMA, APLICACAO } from './config.js'
import { useRolagem, REDUZ_MOVIMENTO } from './hooks/movimento.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import { Dores, Depois, Perfis, Jonas, Cases, Programa,
         Mastermind, Ecossistema, ChamadaFinal } from './components/Secoes.jsx'
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
  const destino = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_TEXTO)}`
  return (
    <a className="zap" href={destino} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <IconeWhatsapp />
      <span>Falar no WhatsApp</span>
    </a>
  )
}

function Rodape() {
  return (
    <footer className="rodape">
      <div className="wrap rodape-in">
        <div className="rodape-marca">
          <img src="/assets/logo-horizontal.svg" alt="Master Revolution" width="180" height="36" loading="lazy" />
          <p>Mentoria e método para donos de loja de móveis planejados que querem
             crescer com margem, equipe e liberdade.</p>
        </div>
        <nav className="rodape-links" aria-label="Links do rodapé">
          {MENU.map(m => <a key={m.href} href={m.href}>{m.texto}</a>)}
          <a href={APLICACAO} target="_blank" rel="noopener">Fazer minha aplicação</a>
          <a href={LINK_SISTEMA} rel="noopener">Já sou Master · acessar sistema</a>
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
        <Dores />
        <Depois />
        <Perfis />
        <Jonas />
        <Cases />
        <Programa />
        <Mastermind />
        <Ecossistema />
        <ChamadaFinal />
      </main>

      <Rodape />
      <Whatsapp />
    </>
  )
}
