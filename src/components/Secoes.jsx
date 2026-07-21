import { RECURSOS, PASSOS, NUMEROS, SEGURANCA, DEPOIMENTOS, LINK_SISTEMA } from '../config.js'
import { useContagem } from '../hooks/movimento.js'
import Reveal from './Reveal.jsx'
import Icone, { Estrelas } from './Icone.jsx'

/* ---------------- o que o sistema resolve ---------------- */
export function Sistema() {
  return (
    <section className="sec" id="sistema">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">O que o sistema resolve</Reveal>
        <Reveal as="h2" atraso={0.12}>A sua loja inteira, organizada<br />num lugar só.</Reveal>
        <Reveal as="p" className="sec-sub" atraso={0.24}>
          Chega de processo na cabeça do dono, combinado no grupo do WhatsApp e
          manual que ninguém nunca escreveu. Aqui, tudo vira sistema.
        </Reveal>

        <div className="bento">
          {RECURSOS.map((r, i) => (
            <Reveal as="article" key={r.titulo} atraso={(i % 3) * 0.12}
                    className={`b-card${r.destaque ? ' b-destaque' : ''}`}>
              <span className="b-ico"><Icone nome={r.icone} /></span>
              <h3>{r.titulo}</h3>
              <p>{r.texto}</p>
              {r.tag && <span className="b-tag">{r.tag}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- como funciona ---------------- */
export function Jornada() {
  return (
    <section className="sec sec-alt" id="jornada">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Como funciona</Reveal>
        <Reveal as="h2" atraso={0.12}>Da chave na mão à loja rodando sem você.</Reveal>
        <ol className="passos">
          {PASSOS.map((p, i) => (
            <Reveal as="li" key={p.n} atraso={i * 0.12}>
              <span className="p-n">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------- números ---------------- */
function Numero({ valor, sufixo, texto, atraso }) {
  const [ref, n] = useContagem(valor)
  return (
    <Reveal className="num" atraso={atraso}>
      <b ref={ref}>{n}{sufixo && <small>{sufixo}</small>}</b>
      <span>{texto}</span>
    </Reveal>
  )
}

export function Numeros() {
  return (
    <section className="numeros" aria-label="O sistema em números">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">O sistema em números</Reveal>
        <div className="num-grid">
          {NUMEROS.map((n, i) => <Numero key={n.texto} {...n} atraso={i * 0.12} />)}
        </div>
      </div>
    </section>
  )
}

/* ---------------- segurança ---------------- */
export function Seguranca() {
  return (
    <section className="sec" id="seguranca">
      <div className="wrap seg-grid">
        <div className="seg-txt">
          <Reveal as="p" className="eyebrow">Segurança de verdade</Reveal>
          <Reveal as="h2" atraso={0.12}>Os dados da sua loja são seus.<br />Ponto final.</Reveal>
          <Reveal as="p" className="sec-sub" atraso={0.24}>
            O sistema foi construído com as mesmas travas que um banco digital usa:
            cada proteção ao lado está funcionando agora, não é promessa de slide.
          </Reveal>
          <Reveal atraso={0.36}>
            <a className="btn btn-fantasma" href={LINK_SISTEMA} rel="noopener">Entrar com segurança</a>
          </Reveal>
        </div>
        <ul className="seg-lista">
          {SEGURANCA.map((s, i) => (
            <Reveal as="li" key={s.titulo} atraso={i * 0.12}>
              <Icone nome={s.icone} />
              <div><b>{s.titulo}</b><span>{s.texto}</span></div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------- idealizador ---------------- */
export function Idealizador() {
  return (
    <section className="sec sec-alt" id="idealizador">
      <div className="wrap ideal-grid">
        <Reveal as="figure" className="ideal-foto">
          <img src="/assets/jonas-pastore.jpg" alt="Jônas Pastore, idealizador do Master Revolution"
               loading="lazy" width="533" height="800" />
          <figcaption>
            <b>Jônas Pastore</b>
            <span>Idealizador do Master Revolution</span>
          </figcaption>
        </Reveal>
        <div className="ideal-txt">
          <Reveal as="p" className="eyebrow">O idealizador</Reveal>
          <Reveal as="h2" atraso={0.12}>Quem vive loja de planejados sabe onde dói.</Reveal>
          <Reveal as="blockquote" className="ideal-quote" atraso={0.24}>
            "Processo não engessa a loja. Processo liberta o dono."
          </Reveal>
          <Reveal as="p" atraso={0.24}>
            Jônas Pastore é fundador da <b>Casa 46</b> e mentor de lojistas de móveis
            planejados por todo o Brasil. O Master Revolution nasceu da rotina real de loja:
            vender bem, medir certo, produzir sem retrabalho e montar sem dor de cabeça.
          </Reveal>
          <Reveal as="p" atraso={0.36}>
            O Sistema de Implantação de Processos é a metodologia da mentoria transformada
            em ferramenta: os mesmos 10 processos e 8 pilares que organizaram a Casa 46,
            prontos para serem implantados na sua loja, no seu ritmo, com acompanhamento de perto.
          </Reveal>
          <Reveal as="ul" className="ideal-selos" atraso={0.48}>
            <li>Fundador da Casa 46</li>
            <li>Mentor Master Revolution</li>
            <li>Imersões pelo Brasil</li>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- depoimentos ---------------- */
export function Depoimentos() {
  return (
    <section className="sec" id="depoimentos">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Quem já usa</Reveal>
        <Reveal as="h2" atraso={0.12}>Masters que saíram do improviso.</Reveal>
        <div className="depo-grid">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal as="figure" className="depo" key={d.nome} atraso={i * 0.12}>
              <Estrelas />
              <blockquote>"{d.texto}"</blockquote>
              <figcaption>
                <span className="depo-av">{d.inicial}</span>
                <div><b>{d.nome}</b><span>{d.origem}</span></div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- cta final ---------------- */
export function CtaFinal() {
  return (
    <section className="cta-final">
      <Reveal className="wrap">
        <h2>Já é Master?<br />O sistema está te esperando.</h2>
        <a className="btn btn-primario btn-g" href={LINK_SISTEMA} rel="noopener">
          <Icone nome="entrar" />Acessar Sistema
        </a>
      </Reveal>
    </section>
  )
}
