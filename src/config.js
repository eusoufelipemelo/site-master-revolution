/* ============================================================
   PAINEL DE CONTROLE DO SITE

   Todo o conteúdo mora aqui. Editar o site não exige abrir
   componente nenhum.

   O site é a porta de entrada emocional do empresário que ainda
   não conhece o Master Revolution. A ordem das seções é a jornada:
   dor → desejo → identificação → autoridade → prova → solução →
   ecossistema → decisão. Mexer na ordem quebra a construção.
   ============================================================ */

/* ---------- contatos e destinos ---------- */
export const WHATSAPP = '5511993439026';          // Escola de Planejados
export const WHATSAPP_TEXTO = 'Olá! Vim pelo site do Master Revolution e quero entender como participar.';
export const APLICACAO = 'https://escola17.yayforms.link/R81Ma7e';
export const LINK_SISTEMA = 'https://gestao.masterrevolution.com.br';

export const MENU = [
  { href: '#dores',     texto: 'O problema' },
  { href: '#depois',    texto: 'O depois' },
  { href: '#perfis',    texto: 'Para quem é' },
  { href: '#jonas',     texto: 'Jônas Pastore' },
  { href: '#programa',  texto: 'O programa' },
  { href: '#mls',       texto: 'Ecossistema' }
]

/* ---------- 1. abertura: a dor ---------- */
export const ANCORA = 'A empresa é do tamanho que você é, e não do tamanho que você quer.'

export const DORES = [
  { icone:'alvo-quebrado', titulo:'Vende sem processo',
    texto:'Cada venda acontece de um jeito. O resultado do mês depende de quem atendeu, do humor do time e da sorte. Não dá para prever, então não dá para planejar.' },
  { icone:'margem', titulo:'Espreme a margem para não perder o cliente',
    texto:'Sem argumento de valor, sobra o desconto. Você vende mais e ganha menos, trabalhando o dobro para entregar o mesmo lucro do ano passado.' },
  { icone:'refem', titulo:'A empresa depende 100% de você',
    texto:'Se você sai, a operação trava. Férias viram trabalho remoto, e o negócio que era para dar liberdade virou o emprego mais exigente que você já teve.' },
  { icone:'cego', titulo:'Toca no escuro',
    texto:'Sem número, sem sistema, sem visibilidade. Você descobre o problema quando ele já virou prejuízo, e decide no achismo o que deveria decidir no dado.' }
]

/* ---------- 2. o depois: o desejo ---------- */
export const DEPOIS = [
  { titulo:'Margem de verdade',
    texto:'Vender pelo valor que o seu trabalho vale, sem entregar lucro no desconto para fechar o pedido.' },
  { titulo:'Equipe que converte sem você',
    texto:'Time treinado no seu método, atendendo no seu padrão, fechando venda enquanto você cuida do que muda o jogo.' },
  { titulo:'Processo que sustenta o padrão',
    texto:'A qualidade deixa de depender de quem está de plantão. O padrão vira sistema, não esforço heroico.' },
  { titulo:'Liberdade geográfica',
    texto:'A operação roda com você longe. Viajar deixa de ser risco e volta a ser o que deveria: viagem.' },
  { titulo:'Crescer com eficiência',
    texto:'Faturar mais sem inchar a estrutura na mesma proporção. Crescimento que cabe no caixa.' }
]

/* ---------- 3. para quem é ---------- */
export const PERFIS = [
  { n:'01', titulo:'No sufoco', resumo:'Precisa sobreviver e sair do improviso.',
    texto:'Sair do ciclo de falta de caixa e dos problemas operacionais. Precisa de diretriz e resultado no curto prazo, e começar o processo de longo prazo.' },
  { n:'02', titulo:'Indo bem', resumo:'Vende, mas quer escalar e ganhar liberdade.',
    texto:'As coisas acontecem, mas falta método e processo para ter mais liberdade e focar no que realmente muda o jogo.' },
  { n:'03', titulo:'Voando', resumo:'Quer eficiência máxima e formar líderes.',
    texto:'O negócio vai muito bem. Agora é hora de ganhar eficiência, formar líderes e ser o maestro da operação, num outro nível de convivência.' }
]

/* ---------- 4. autoridade ---------- */
export const TRAJETORIA = [
  'Frentista','Empacotador','Comprador','Instrutor de treinamento',
  'Supervisor comercial','Gerente regional','Gerente nacional',
  'Abertura de capital (IPO)','Casa 46 · o próprio negócio'
]

/* Números conferidos na apresentação oficial do Master Revolution. */
export const PROVA = [
  { valor:1,    prefixo:'+', sufixo:' bi', texto:'em negócios gerados' },
  { valor:1300, prefixo:'+', sufixo:'',    texto:'empresários treinados' },
  { valor:3,    prefixo:'',  sufixo:'',    texto:'países: Brasil, EUA e México' },
  { valor:1,    prefixo:'',  sufixo:'º',   texto:'Mastermind do segmento' }
]

/* ---------- 5. prova social ----------
   ATENÇÃO: substituir por cases REAIS antes de divulgar.
   Estes são exemplos de formato, com nome fictício e resultado
   genérico. Colocar nome de cliente inventado numa página de vendas
   é prova social falsa — trocar assim que os depoimentos chegarem. */
export const CASES = [
  { nome:'—', empresa:'Loja de planejados · Brasil', resultado:'Triplicaram o faturamento',
    texto:'[Aguardando depoimento real]' },
  { nome:'—', empresa:'Loja de planejados · México', resultado:'Recorde de faturamento',
    texto:'[Aguardando depoimento real]' },
  { nome:'—', empresa:'Loja de planejados · EUA', resultado:'Operação rodando sem o dono',
    texto:'[Aguardando depoimento real]' }
]
/* Enquanto os cases reais não chegam, a seção fica escondida.
   Vire para true quando preencher CASES acima. */
export const MOSTRAR_CASES = false

/* ---------- 6. a solução ---------- */
export const CAMADAS = [
  { icone:'coroa', titulo:'Para o dono', texto:'Visão, estratégia, método e mentoria. Tudo começa aqui: nenhuma empresa cresce além do tamanho de quem a lidera.' },
  { icone:'lideranca', titulo:'Para as lideranças', texto:'Formação de líderes e condução de equipe. Quem está no meio do campo precisa saber conduzir, não só executar.' },
  { icone:'equipe', titulo:'Para a equipe', texto:'Treinamento e implantação prática. O método só vira resultado quando chega em quem atende o cliente todo dia.' }
]

export const PILARES = [
  { icone:'clube', titulo:'Clube de Empresários',
    texto:'Ambiente, frequência e convivência. Com quem você anda determina o tamanho do problema que você acha normal.' },
  { icone:'metodo', titulo:'Mentoria com Método',
    texto:'Mentorias em grupo e individuais, sobre um método construído dentro de loja de planejados, não em teoria de sala de aula.' },
  { icone:'ano', titulo:'12 meses de acompanhamento',
    texto:'Transformação não acontece em evento. Acontece em acompanhamento, ao longo de um ciclo inteiro do seu negócio.' }
]

/* ---------- 7. ecossistema MLS ---------- */
export const MLS = {
  titulo:'Mentoring League Society',
  socios:'Flávio Augusto, Caio Carneiro e Joel Jota',
  legenda:'Jônas e Carol Pastore com os fundadores da Mentoring League Society'
}
