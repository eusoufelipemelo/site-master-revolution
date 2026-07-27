import { useState } from 'react'
import { MENU, APLICACAO, LINK_SISTEMA } from '../config.js'
import Icone from './Icone.jsx'

export default function Navbar({ rolou }) {
  const [aberto, setAberto] = useState(false)

  return (
    <header className={`nav${rolou ? ' rolou' : ''}`}>
      <div className="nav-in">
        <a className="nav-logo" href="#topo" aria-label="Master Revolution, início">
          <img src="/assets/logo-horizontal.svg" alt="Master Revolution" width="206" height="41" />
        </a>

        <nav className={`nav-links${aberto ? ' aberto' : ''}`} aria-label="Seções do site">
          {MENU.map(item => (
            <a key={item.href} href={item.href} onClick={() => setAberto(false)}>
              {item.texto}
            </a>
          ))}
          {/* o acesso ao sistema é para quem já é Master: fica no menu, não
              compete com o CTA de aplicação */}
          <a className="nav-sistema" href={LINK_SISTEMA} rel="noopener" onClick={() => setAberto(false)}>
            Já sou Master
          </a>
        </nav>

        <a className="btn btn-primario nav-cta" href={APLICACAO} target="_blank" rel="noopener">
          <Icone nome="aplicar" />
          <span>Fazer aplicação</span>
        </a>

        <button
          className="nav-burger"
          type="button"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto(a => !a)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
