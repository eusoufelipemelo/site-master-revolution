/* ============================================================
   PAINEL DE CONTROLE DO SITE
   Tudo que muda com o tempo mora aqui: número de WhatsApp,
   textos, fotos, depoimentos e perguntas. Não precisa abrir
   componente nenhum para editar o conteúdo.
   ============================================================ */

/* Número do WhatsApp da equipe (DDI+DDD+número, só dígitos).
   Enquanto estiver vazio, o botão flutuante rola até o formulário
   e o formulário envia por e-mail. Preencheu, tudo passa a abrir
   direto no WhatsApp com a mensagem pronta. */
export const WHATSAPP = ''
export const EMAIL_EQUIPE = 'contato@escoladeplanejados.com.br'
export const LINK_SISTEMA = 'https://gestao.masterrevolution.com.br'

export const MENU = [
  { href: '#sistema',     texto: 'O sistema' },
  { href: '#seguranca',   texto: 'Segurança' },
  { href: '#idealizador', texto: 'Idealizador' },
  { href: '#depoimentos', texto: 'Depoimentos' },
  { href: '#faq',         texto: 'FAQ' },
  { href: '#contato',     texto: 'Contato' }
]

/* barras do mockup no hero */
export const MOCK_BARRAS = [
  { nome: 'Pré-Venda', pct: 92 },
  { nome: 'Venda',     pct: 78 },
  { nome: 'Medição',   pct: 64 },
  { nome: 'Executivo', pct: 41 },
  { nome: 'Montagem',  pct: 26 }
]
export const MOCK_IMPLANTACAO = 68

export const FAIXA = ['10 PROCESSOS','8 PILARES','MANUAL OFICIAL','ORGANOGRAMA','PLAYBOOKS','ACOMPANHAMENTO']

export const RECURSOS = [
  { icone:'livro', destaque:true, titulo:'Manual oficial da sua loja',
    texto:'O sistema escreve o manual de processos com o seu conteúdo e a sua logomarca. Sai em PDF, pronto para imprimir, treinar equipe nova e encerrar o "aqui cada um faz de um jeito".',
    tag:'Gerado com a sua marca' },
  { icone:'organograma', titulo:'Organograma que se monta sozinho',
    texto:'Você cadastra a equipe e diz quem responde a quem. A hierarquia da loja aparece desenhada, sem arrastar caixinha.' },
  { icone:'arquivo', titulo:'Playbook por função',
    texto:'Vendedor, medidor, projetista, montador: cada cargo com o passo a passo do que fazer, editável do seu jeito.' },
  { icone:'pasta', titulo:'Central de documentos',
    texto:'Contratos, checklists e os materiais da mentoria guardados na nuvem, disponíveis em qualquer dispositivo.' },
  { icone:'grafico', titulo:'Evolução acompanhada',
    texto:'A equipe do Master Revolution enxerga o seu avanço em tempo real e age quando você trava em alguma etapa.' },
  { icone:'chat', titulo:'Karol, canal direto',
    texto:'Chat em tempo real dentro do sistema, direto com a equipe da mentoria. Sem ticket, sem espera de dias.' }
]

export const PASSOS = [
  { n:'01', titulo:'Receba o seu código',
    texto:'A equipe entrega um código pessoal e intransferível. Ele é a sua chave de entrada no sistema.' },
  { n:'02', titulo:'Complete o seu perfil',
    texto:'Seus dados, sua empresa e sua logomarca. É isso que personaliza o manual e os documentos gerados.' },
  { n:'03', titulo:'Implante os 10 processos',
    texto:'Etapa por etapa, do Pré-Venda ao Pós-Venda, com tarefas claras e progresso marcado na tela.' },
  { n:'04', titulo:'Evolua acompanhado',
    texto:'O painel da mentoria mostra onde você está. Quando trava, a equipe chega antes de você pedir.' }
]

export const NUMEROS = [
  { valor:10,  sufixo:'',    texto:'processos implantados passo a passo' },
  { valor:8,   sufixo:'',    texto:'pilares dentro de cada processo' },
  { valor:3,   sufixo:'',    texto:'idiomas: português, espanhol e inglês' },
  { valor:15,  sufixo:'min', texto:'de validade de cada código de acesso' },
  { valor:100, sufixo:'%',   texto:'na nuvem, de qualquer dispositivo' }
]

export const SEGURANCA = [
  { icone:'cadeado', titulo:'Código de uso único',
    texto:'Cada acesso nasce de um código pessoal que expira em 15 minutos e morre depois de usado.' },
  { icone:'escudo', titulo:'Isolamento por usuário',
    texto:'A trava fica no banco de dados: um lojista nunca enxerga os dados de outro, nem por engano.' },
  { icone:'documento', titulo:'LGPD com aceite registrado',
    texto:'Termos de Uso, Política de Privacidade e consentimento LGPD com data, hora e versão gravadas.' },
  { icone:'globo', titulo:'Conexão criptografada',
    texto:'HTTPS em todas as telas. A senha viaja cifrada e nem a equipe consegue ver.' },
  { icone:'olho', titulo:'Suporte transparente',
    texto:'Quando a equipe visualiza a sua conta para te ajudar, fica registrado com data, hora e autor.' }
]

/* TROCAR por depoimentos reais de mentorados antes de divulgar.
   Estes são exemplos escritos para a construção do site. */
export const DEPOIMENTOS = [
  { inicial:'R', nome:'Rodrigo', origem:'Loja de planejados · interior de SP',
    texto:'Eu era o gargalo de tudo. Hoje a equipe abre o playbook e resolve sem me ligar. O manual com a minha marca foi o dia que a ficha caiu.' },
  { inicial:'C', nome:'Carla', origem:'Loja de planejados · região Sul',
    texto:'O organograma me obrigou a decidir quem responde a quem. Parece simples, mas acabou com metade das confusões da minha montagem.' },
  { inicial:'M', nome:'Marcos', origem:'Loja de planejados · Centro-Oeste',
    texto:'Travei na etapa de medição e nem precisei pedir ajuda: a equipe viu no painel e me chamou pela Karol. Isso é acompanhamento de verdade.' }
]

/* Galeria: `id` é o código da foto no Unsplash. Para usar foto própria,
   troque por { src:'/assets/minha-foto.jpg' } e coloque o arquivo em public/assets.
   `formato` monta o bento: 'ancora' ocupa 2x2, 'alto' 1x2, 'largo' 2x1. */
export const GALERIA = [
  { id:'photo-1600607687939-ce8a6c25118c', alt:'Cozinha planejada de alto padrão com ilha', formato:'ancora' },
  { id:'photo-1556228453-efd6c1ff04f6',    alt:'Ambiente com marcenaria em tom escuro' },
  { id:'photo-1622372738946-62e02505feb3', alt:'Closet planejado sob medida', formato:'alto' },
  { id:'photo-1616486338812-3dadae4b4ace', alt:'Sala com painel e marcenaria sob medida' },
  { id:'photo-1594026112284-02bb6f3352fe', alt:'Cozinha com armários planejados claros' },
  { id:'photo-1618221195710-dd6b41faaea6', alt:'Living de alto padrão com mobiliário sob medida', formato:'largo' },
  { id:'photo-1611269154421-4e27233ac5c7', alt:'Home office com escrivaninha sob medida' },
  { id:'photo-1595428774223-ef52624120d2', alt:'Detalhe de projeto e acabamento', formato:'alto' },
  { id:'photo-1615874959474-d609969a20ed', alt:'Dormitório com guarda-roupa planejado' },
  { id:'photo-1631679706909-1844bbd07221', alt:'Ambiente integrado com painéis de madeira', formato:'largo' }
]

export const FAQ = [
  { p:'Como recebo o meu acesso?',
    r:'A equipe do Master Revolution te entrega um código pessoal. Ele vale para uma única pessoa e expira em 15 minutos, então você o usa na hora de criar a conta. Depois disso, é só entrar com e-mail e senha.' },
  { p:'Esqueci minha senha. E agora?',
    r:'Na tela de login existe o "Esqueci minha senha". Você recebe um link por e-mail e cria uma nova em segundos, sem depender de ninguém.' },
  { p:'Outros mentorados veem os meus dados?',
    r:'Nunca. O isolamento é feito no banco de dados: cada conta só alcança o que é dela. Apenas a equipe da mentoria acompanha a sua evolução, e todo acesso de suporte fica registrado.' },
  { p:'Funciona no celular?',
    r:'Sim. O sistema roda no navegador, sem instalar nada, e foi desenhado para funcionar bem no computador da loja e no celular do dono.' },
  { p:'Em quais idiomas o sistema está disponível?',
    r:'Português, espanhol e inglês. Você troca o idioma em um clique, dentro do próprio sistema.' },
  { p:'O acesso tem custo à parte?',
    r:'Não. O sistema é uma ferramenta exclusiva da mentoria Master Revolution: quem é mentorado ativo recebe o acesso como parte do programa.' },
  { p:'Minha equipe também usa?',
    r:'O acesso ao sistema é do mentorado. O que a equipe recebe são os materiais gerados nele: o manual oficial, os playbooks por função e os documentos de treinamento, todos com a marca da sua loja.' }
]

export const MOMENTOS = [
  'Estou começando agora',
  'Vendo bem, mas sem processo',
  'Quero escalar com equipe',
  'Sou mentorado e preciso de suporte'
]
