import { DORES, DEPOIS, PERFIS, TRAJETORIA, PROVA, CASES, MOSTRAR_CASES,
         CAMADAS, PILARES, MLS, ANCORA, APLICACAO } from '../config.js'
import { useContagem } from '../hooks/movimento.js'
import Reveal from './Reveal.jsx'
import Icone, { Estrelas } from './Icone.jsx'

/* botão de aplicação: o destino final de toda a página */
export function BotaoAplicar({ classe = '', children }) {
  return (
    <a className={`btn btn-primario ${classe}`} href={APLICACAO} target="_blank" rel="noopener">
      <Icone nome="aplicar" />
      {children || 'Fazer minha aplicação'}
    </a>
  )
}

/* ---------------- 1. a dor ---------------- */
export function Dores() {
  return (
    <section className="sec sec-dor" id="dores">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">O diagnóstico honesto</Reveal>
        <Reveal as="h2" atraso={0.12}>
          Se você se reconhecer em alguma delas,<br />
          <em>o problema não é o mercado.</em>
        </Reveal>

        <div className="dor-grid">
          {DORES.map((d, i) => (
            <Reveal as="article" className="dor-card" key={d.titulo} atraso={i * 0.1}>
              <span className="dor-ico"><Icone nome={d.icone} /></span>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="dor-fecho" atraso={0.2}>
          <p>Nenhuma delas se resolve trabalhando mais. Todas se resolvem trabalhando diferente.</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- 2. o depois ---------------- */
export function Depois() {
  return (
    <section className="sec sec-alt" id="depois">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Do outro lado</Reveal>
        <Reveal as="h2" atraso={0.12}>O dia em que a empresa<br /><em>para de depender de você.</em></Reveal>
        <Reveal as="p" className="sec-sub" atraso={0.2}>
          Não é sobre trabalhar menos. É sobre a sua empresa finalmente funcionar
          no seu padrão, mesmo quando você não está na sala.
        </Reveal>

        <ol className="depois-lista">
          {DEPOIS.map((d, i) => (
            <Reveal as="li" key={d.titulo} atraso={i * 0.09}>
              <span className="dp-marca"><Icone nome="check" /></span>
              <div><b>{d.titulo}</b><span>{d.texto}</span></div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------- 3. para quem é ---------------- */
export function Perfis() {
  return (
    <section className="sec" id="perfis">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Autodiagnóstico</Reveal>
        <Reveal as="h2" atraso={0.12}>Em qual fase está a sua empresa <em>agora?</em></Reveal>
        <Reveal as="p" className="sec-sub" atraso={0.2}>
          Pare e responda com honestidade. As três fases entram no programa,
          mas cada uma começa por um lugar diferente.
        </Reveal>

        <div className="perfil-grid">
          {PERFIS.map((p, i) => (
            <Reveal as="article" className="perfil-card" key={p.n} atraso={i * 0.12}>
              <span className="pf-n">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p className="pf-resumo">{p.resumo}</p>
              <p className="pf-texto">{p.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 4. autoridade ---------------- */
function NumeroProva({ valor, prefixo, sufixo, texto, atraso }) {
  const [ref, n] = useContagem(valor)
  return (
    <Reveal className="prova-item" atraso={atraso}>
      <b ref={ref}>{prefixo}{n}{sufixo}</b>
      <span>{texto}</span>
    </Reveal>
  )
}

export function Jonas() {
  return (
    <section className="sec sec-alt" id="jonas">
      <div className="wrap jonas-grid">
        <Reveal as="figure" className="jonas-foto">
          <img src="/assets/jonas-pastore.webp"
               srcSet="/assets/jonas-pastore.webp 560w, /assets/jonas-pastore@2x.webp 1120w"
               sizes="(max-width:1080px) 420px, 30vw"
               alt="Jônas Pastore" loading="lazy" decoding="async" width="560" height="841" />
          <figcaption><b>Jônas Pastore</b><span>Fundador do Master Revolution</span></figcaption>
        </Reveal>

        <div className="jonas-txt">
          <Reveal as="p" className="eyebrow">Quem conduz</Reveal>
          <Reveal as="h2" atraso={0.12}>De frentista a sócio de uma<br /><em>empresa de capital aberto.</em></Reveal>
          <Reveal as="p" atraso={0.2}>
            Jônas Pastore começou como frentista de posto. Passou por cada degrau da
            indústria de móveis planejados até chegar à diretoria da Unicasa e viver
            de dentro a abertura de capital da companhia. Depois, fundou a sua própria
            operação: a <b>Casa 46</b>.
          </Reveal>
          <Reveal as="p" atraso={0.26}>
            Ele não ensina teoria de sala de aula. Ensina o que fez dar certo em loja,
            com margem, equipe e cliente de verdade.
          </Reveal>

          <Reveal as="ol" className="trajetoria" atraso={0.32}>
            {TRAJETORIA.map((t, i) => (
              <li key={t}><span>{String(i + 1).padStart(2, '0')}</span>{t}</li>
            ))}
          </Reveal>

          <Reveal className="jonas-hoje" atraso={0.38}>
            <p>
              Hoje é sócio da <b>Mentoring League Society</b> ao lado de {MLS.socios},
              e host do <b>Pastore Cast</b>.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="wrap">
        <div className="prova-faixa">
          {PROVA.map((p, i) => <NumeroProva key={p.texto} {...p} atraso={i * 0.1} />)}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 5. prova social ---------------- */
export function Cases() {
  if (!MOSTRAR_CASES) return null
  return (
    <section className="sec" id="cases">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Quem já fez</Reveal>
        <Reveal as="h2" atraso={0.12}>Empresários que mudaram o<br /><em>tamanho do próprio negócio.</em></Reveal>
        <div className="case-grid">
          {CASES.map((c, i) => (
            <Reveal as="figure" className="case" key={c.nome + i} atraso={i * 0.12}>
              <Estrelas />
              <b className="case-res">{c.resultado}</b>
              <blockquote>{c.texto}</blockquote>
              <figcaption><b>{c.nome}</b><span>{c.empresa}</span></figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 6. a solução ---------------- */
export function Programa() {
  return (
    <section className="sec sec-alt" id="programa">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">O programa</Reveal>
        <Reveal as="h2" atraso={0.12}>Tudo começa em você.<br /><em>Mas não termina em você.</em></Reveal>
        <Reveal as="p" className="sec-sub" atraso={0.2}>
          Dono transformado com equipe do mesmo jeito de antes não muda resultado.
          Por isso o programa alcança a empresa inteira.
        </Reveal>

        <div className="camada-grid">
          {CAMADAS.map((c, i) => (
            <Reveal as="article" className="camada" key={c.titulo} atraso={i * 0.12}>
              <span className="cm-ico"><Icone nome={c.icone} /></span>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </Reveal>
          ))}
        </div>

        <div className="pilar-grid">
          {PILARES.map((p, i) => (
            <Reveal as="article" className="pilar" key={p.titulo} atraso={i * 0.1}>
              <span className="pl-ico"><Icone nome={p.icone} /></span>
              <div><h4>{p.titulo}</h4><p>{p.texto}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- 7. mastermind: momento próprio ---------------- */
export function Mastermind() {
  return (
    <section className="mastermind">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Mastermind</Reveal>
        <Reveal as="blockquote" className="mm-frase" atraso={0.12}>
          Uma sala com os empresários certos resolve em uma tarde
          o que você levaria <em>três anos</em> para descobrir sozinho.
        </Reveal>
        <Reveal as="p" className="mm-txt" atraso={0.24}>
          É o primeiro Mastermind do segmento de móveis planejados. Inteligência
          coletiva aplicada ao seu problema real, com quem já viveu o mesmo
          problema e resolveu. Não é palestra: é a sua empresa na mesa.
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- 8. ecossistema MLS ---------------- */
export function Ecossistema() {
  return (
    <section className="sec" id="mls">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Ecossistema</Reveal>
        <Reveal as="h2" atraso={0.12}>Você não entra só num programa.<br /><em>Entra num círculo.</em></Reveal>
        <Reveal as="p" className="sec-sub" atraso={0.2}>
          O Master Revolution dá acesso ao ecossistema da {MLS.titulo}: outro nível de
          conteúdo, de sala e, principalmente, de gente ao seu lado.
        </Reveal>

        <Reveal as="figure" className="mls-foto" atraso={0.26}>
          <img src="/assets/mls-socios.webp"
               srcSet="/assets/mls-socios.webp 1140w, /assets/mls-socios@2x.webp 1600w"
               sizes="(max-width:900px) 100vw, 1140px"
               alt={MLS.legenda} loading="lazy" decoding="async" width="1140" height="641" />
          <figcaption>{MLS.legenda}</figcaption>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- 9. chamada final ---------------- */
export function ChamadaFinal() {
  return (
    <section className="cta-final">
      <Reveal className="wrap">
        <p className="eyebrow centro">A decisão</p>
        <blockquote className="cta-ancora">{ANCORA}</blockquote>
        <p className="cta-txt">
          As vagas passam por aplicação porque a sala precisa ser do tamanho certo.
          Preencha, e a nossa equipe conversa com você para entender o seu momento.
        </p>
        <div className="cta-botoes">
          <BotaoAplicar classe="btn-g" />
        </div>
        <p className="cta-nota">Sem compromisso e sem cobrança nesta etapa.</p>
      </Reveal>
    </section>
  )
}
