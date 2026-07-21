import { useState } from 'react'
import { FAQ } from '../config.js'
import Reveal from './Reveal.jsx'

export default function Faq() {
  // um aberto por vez: o React controla, sem sincronizar <details> na mão
  const [aberta, setAberta] = useState(null)

  return (
    <section className="sec" id="faq">
      <div className="wrap wrap-estreito">
        <Reveal as="p" className="eyebrow">Perguntas frequentes</Reveal>
        <Reveal as="h2" atraso={0.12}>O que todo Master pergunta antes de entrar.</Reveal>
        <div className="faq-lista">
          {FAQ.map((item, i) => (
            <Reveal as="details" key={item.p} atraso={(i % 3) * 0.12}
                    open={aberta === i}
                    onToggle={(e) => {
                      if (e.currentTarget.open) setAberta(i)
                      else if (aberta === i) setAberta(null)
                    }}>
              <summary>
                {item.p}
                <span className="faq-mais" aria-hidden="true" />
              </summary>
              <p>{item.r}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
