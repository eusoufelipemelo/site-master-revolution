import { useCallback, useEffect, useRef, useState } from 'react'
import { GALERIA } from '../config.js'
import Reveal from './Reveal.jsx'
import Icone from './Icone.jsx'

const CLASSE_FORMATO = { ancora: 'g-a', alto: 'g-alto', largo: 'g-largo' }

/* Foto do Unsplash em duas resoluções, ou arquivo próprio de public/assets */
function url(foto, largura) {
  if (foto.src) return foto.src
  return `https://images.unsplash.com/${foto.id}?w=${largura}&q=${largura > 1200 ? 82 : 78}&auto=format`
}

function Lightbox({ indice, aoFechar, aoTrocar }) {
  const foto = GALERIA[indice]
  const fecharRef = useRef(null)

  // trava a rolagem do fundo enquanto a foto está aberta
  useEffect(() => {
    const antes = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    fecharRef.current?.focus()
    return () => { document.body.style.overflow = antes }
  }, [])

  useEffect(() => {
    const tecla = (e) => {
      if (e.key === 'Escape') aoFechar()
      else if (e.key === 'ArrowLeft') aoTrocar(-1)
      else if (e.key === 'ArrowRight') aoTrocar(1)
    }
    document.addEventListener('keydown', tecla)
    return () => document.removeEventListener('keydown', tecla)
  }, [aoFechar, aoTrocar])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada"
         onClick={(e) => { if (e.target === e.currentTarget) aoFechar() }}>
      <button className="lb-fechar" type="button" aria-label="Fechar" ref={fecharRef} onClick={aoFechar}>
        <Icone nome="fechar" />
      </button>
      <button className="lb-seta lb-ant" type="button" aria-label="Foto anterior" onClick={() => aoTrocar(-1)}>
        <Icone nome="seta_esq" />
      </button>
      <figure className="lb-figura">
        {/* key força o React a remontar a img: a animação de entrada roda a cada troca */}
        <img key={indice} src={url(foto, 1800)} alt={foto.alt} />
        <figcaption>
          <span>{foto.alt}</span>
          <em>{indice + 1} / {GALERIA.length}</em>
        </figcaption>
      </figure>
      <button className="lb-seta lb-prox" type="button" aria-label="Próxima foto" onClick={() => aoTrocar(1)}>
        <Icone nome="seta_dir" />
      </button>
    </div>
  )
}

export default function Galeria() {
  const [aberta, setAberta] = useState(null)

  const fechar = useCallback(() => setAberta(null), [])
  const trocar = useCallback((passo) => {
    setAberta(i => (i + passo + GALERIA.length) % GALERIA.length)
  }, [])

  return (
    <>
      <section className="sec sec-alt" id="galeria">
        <div className="wrap">
          <Reveal as="p" className="eyebrow">Galeria</Reveal>
          <Reveal as="h2" atraso={0.12}>O universo Master Revolution.</Reveal>
          <Reveal as="p" className="sec-sub" atraso={0.24}>
            Mentoria, imersões e o padrão de loja que a metodologia constrói.
          </Reveal>
        </div>

        <Reveal className="wrap galeria" atraso={0.24}>
          {GALERIA.map((foto, i) => (
            <button
              key={foto.id || foto.src}
              type="button"
              className={`g-item${foto.formato ? ' ' + CLASSE_FORMATO[foto.formato] : ''}`}
              onClick={() => setAberta(i)}
              aria-label={`Ampliar: ${foto.alt}`}
            >
              <img src={url(foto, foto.formato === 'ancora' || foto.formato === 'largo' ? 1100 : 900)}
                   alt={foto.alt} loading="lazy" />
            </button>
          ))}
        </Reveal>
      </section>

      {aberta !== null && <Lightbox indice={aberta} aoFechar={fechar} aoTrocar={trocar} />}
    </>
  )
}
