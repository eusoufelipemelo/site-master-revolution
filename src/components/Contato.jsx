import { useState } from 'react'
import { WHATSAPP, EMAIL_EQUIPE, MOMENTOS } from '../config.js'
import Reveal from './Reveal.jsx'
import Icone from './Icone.jsx'

const VAZIO = { nome:'', whatsapp:'', email:'', momento:MOMENTOS[0], mensagem:'' }

export default function Contato() {
  const [dados, setDados] = useState(VAZIO)
  const [nota, setNota] = useState({ tipo:'', texto:'' })

  const mudar = (campo) => (ev) => setDados(d => ({ ...d, [campo]: ev.target.value }))

  const enviar = (ev) => {
    ev.preventDefault()
    const { nome, whatsapp, email, momento, mensagem } = dados

    if (!nome.trim())      return setNota({ tipo:'erro', texto:'Conta pra gente o seu nome.' })
    if (!whatsapp.trim())  return setNota({ tipo:'erro', texto:'Precisamos do seu WhatsApp para retornar.' })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setNota({ tipo:'erro', texto:'Confere o e-mail? Parece incompleto.' })

    const corpo =
      'Olá! Vim pelo site do Master Revolution.\n\n' +
      `Nome: ${nome}\n` +
      `WhatsApp: ${whatsapp}\n` +
      `E-mail: ${email}\n` +
      `Momento da loja: ${momento}` +
      (mensagem.trim() ? `\n\nMensagem: ${mensagem}` : '')

    if (WHATSAPP) {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(corpo)}`, '_blank', 'noopener')
      setNota({ tipo:'ok', texto:'Abrimos o WhatsApp com a sua mensagem pronta. É só enviar!' })
    } else {
      window.location.href = `mailto:${EMAIL_EQUIPE}` +
        `?subject=${encodeURIComponent('Contato pelo site · Master Revolution')}` +
        `&body=${encodeURIComponent(corpo)}`
      setNota({ tipo:'ok', texto:'Abrimos o seu e-mail com a mensagem pronta. É só enviar!' })
    }
    setDados(VAZIO)
  }

  return (
    <section className="sec sec-alt" id="contato">
      <div className="wrap form-grid">
        <div className="form-txt">
          <Reveal as="p" className="eyebrow">Fale com a equipe</Reveal>
          <Reveal as="h2" atraso={0.12}>Quer colocar a sua loja nesse nível?</Reveal>
          <Reveal as="p" className="sec-sub" atraso={0.24}>
            Se você ainda não é mentorado e quer conhecer o Master Revolution,
            deixe seus dados. A equipe retorna direto no seu WhatsApp.
          </Reveal>
          <Reveal as="ul" className="form-selos" atraso={0.36}>
            <li><Icone nome="check" />Resposta pela própria equipe</li>
            <li><Icone nome="check" />Sem spam, sem lista fria</li>
          </Reveal>
        </div>

        <Reveal as="form" className="form" atraso={0.12} onSubmit={enviar} noValidate>
          <div className="f-campo">
            <label htmlFor="fNome">Seu nome</label>
            <input id="fNome" type="text" autoComplete="name" placeholder="Como você se chama?"
                   value={dados.nome} onChange={mudar('nome')} />
          </div>
          <div className="f-duo">
            <div className="f-campo">
              <label htmlFor="fZap">WhatsApp</label>
              <input id="fZap" type="tel" autoComplete="tel" placeholder="(00) 00000-0000"
                     value={dados.whatsapp} onChange={mudar('whatsapp')} />
            </div>
            <div className="f-campo">
              <label htmlFor="fEmail">E-mail</label>
              <input id="fEmail" type="email" autoComplete="email" placeholder="voce@email.com"
                     value={dados.email} onChange={mudar('email')} />
            </div>
          </div>
          <div className="f-campo">
            <label htmlFor="fMomento">Momento da sua loja</label>
            <select id="fMomento" value={dados.momento} onChange={mudar('momento')}>
              {MOMENTOS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div className="f-campo">
            <label htmlFor="fMsg">Mensagem</label>
            <textarea id="fMsg" rows="4" placeholder="Conte rapidamente o que você busca"
                      value={dados.mensagem} onChange={mudar('mensagem')} />
          </div>
          <button className="btn btn-primario btn-g f-envia" type="submit">
            <Icone nome="enviar" />Enviar para a equipe
          </button>
          <p className={`f-nota${nota.tipo ? ' ' + nota.tipo : ''}`} role="status">{nota.texto}</p>
        </Reveal>
      </div>
    </section>
  )
}
