// Mock data para ImobiBrasil Landing Page

export const heroData = {
  title: "Sistema Completo para Imobiliárias",
  subtitle: "CRM, Funil de Vendas, Integração com Portais e Automação Inteligente",
  description: "Oferecemos uma excelente experiência em navegação, com a união de um CRM prático e eficaz para imobiliárias e corretores.",
  ctaText: "Teste Grátis por 7 Dias",
  metrics: [
    { value: "+15.000", label: "Imobiliárias Ativas" },
    { value: "+2M", label: "Imóveis Gerenciados" },
    { value: "+40%", label: "Aumento nas Vendas" }
  ]
};

export const plansData = [
  {
    id: 1,
    name: "Simples",
    description: "Serviço inicial para o seu orçamento",
    price: "54,99",
    features: [
      "Cadastro de até 30 imóveis",
      "32 fotos por imóvel",
      "1 Conta de E-mail (via POP3)",
      "5 Catálogos de Imóveis",
      "5 Hotsites Diversos",
      "Usuário único do Sistema",
      "Inteligência Artificial - 5 descrições"
    ],
    recommended: false
  },
  {
    id: 2,
    name: "Essencial",
    description: "Para quem está em constante evolução",
    price: "74,99",
    features: [
      "Cadastro de até 350 imóveis",
      "50 Fotos por Imóvel",
      "3 Contas de E-mail (via POP3)",
      "10 Catálogos de Imóveis",
      "10 Hotsites Diversos",
      "3 Usuários do Sistema",
      "Inteligência Artificial - 10 descrições",
      "Esteira de Leads",
      "Certificado SSL"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "Impulso",
    description: "Eleve sua jornada para o próximo patamar",
    price: "119,99",
    features: [
      "Cadastro de até 1000 imóveis",
      "64 Fotos por Imóvel",
      "5 Contas de E-mail (via POP3)",
      "20 Catálogos de Imóveis",
      "20 Hotsites Diversos",
      "5 Usuários do Sistema",
      "Inteligência Artificial - 15 descrições",
      "Esteira de Leads",
      "Certificado SSL"
    ],
    recommended: false
  },
  {
    id: 4,
    name: "Expansão",
    description: "Para negócios que exigem a mais alta performance",
    price: "249,99",
    features: [
      "Cadastro de até 3000 imóveis",
      "64 Fotos por Imóvel",
      "15 Contas de E-mail (via POP3)",
      "40 Catálogos de Imóveis",
      "40 Hotsites Diversos",
      "15 Usuários do Sistema",
      "Inteligência Artificial - 50 descrições",
      "Esteira de Leads",
      "Habilitação Órulo e DWV",
      "Certificado SSL"
    ],
    recommended: false
  }
];

export const featuresData = [
  {
    id: 1,
    title: "CRM Negócios",
    description: "Defina e acompanhe toda jornada de compra do seu cliente",
    icon: "Users"
  },
  {
    id: 2,
    title: "Funil de Vendas",
    description: "Organize de maneira efetiva suas negociações do início ao fim",
    icon: "TrendingUp"
  },
  {
    id: 3,
    title: "Imóveis Compatíveis",
    description: "A ferramenta ideal para encontrar o imóvel certo para seu cliente",
    icon: "Home"
  },
  {
    id: 4,
    title: "Inteligência Artificial",
    description: "Gerador automático de descrições profissionais para imóveis",
    icon: "Brain"
  },
  {
    id: 5,
    title: "WhatsApp Lead",
    description: "Faça a captação de contatos para WhatsApp e se aproxime do cliente",
    icon: "MessageSquare"
  },
  {
    id: 6,
    title: "Gerador de Contratos",
    description: "Crie diversos contratos preenchendo poucas informações necessárias",
    icon: "FileText"
  }
];

export const portalsData = [
  { name: "ZAP Imóveis", logo: "https://www.imobibrasil.com.br/imagens/parceiros/novo/zapimoveis.png" },
  { name: "VivaReal", logo: "https://www.imobibrasil.com.br/imagens/parceiros/novo/vivareal.png" },
  { name: "OLX", logo: "https://www.imobibrasil.com.br/imagens/parceiros/novo/olx.png" },
  { name: "ImóvelWeb", logo: "https://www.imobibrasil.com.br/imagens/site-para-imobiliarias/marcas/imovelweb.png" },
  { name: "Casa Mineira", logo: "https://www.imobibrasil.com.br/imagens/parceiros/novo/casa_mineira.png" },
  { name: "Órulo", logo: "https://www.imobibrasil.com.br/imagens/parceiros/orulo.jpg" },
  { name: "Chaves na Mão", logo: "https://www.imobibrasil.com.br/imagens/parceiros/chavesnamao.png" }
];

export const testimonialsData = [
  {
    id: 1,
    name: "JHR Imóveis de Luxo",
    website: "www.jhrimoveisdeluxo.com.br",
    feedback: "O ImobiBrasil transformou nossa gestão imobiliária. Aumento significativo nas vendas com o CRM integrado.",
    image: "https://www.imobibrasil.com.br/imagens/clientes/jhr.jpg"
  },
  {
    id: 2,
    name: "Ski Imóveis",
    website: "www.skiimoveis.com.br",
    feedback: "Sistema completo e intuitivo. A integração com portais economiza horas de trabalho diariamente.",
    image: "https://www.imobibrasil.com.br/imagens/clientes/ski.jpg"
  },
  {
    id: 3,
    name: "Residenza Imóveis",
    website: "www.residenzainvest.com.br",
    feedback: "Melhor custo-benefício do mercado. Atendimento excepcional e recursos que realmente funcionam.",
    image: "https://www.imobibrasil.com.br/imagens/clientes/residenza.jpg"
  }
];

export const faqData = [
  {
    id: 1,
    question: "Por que escolher a ImobiBrasil?",
    answer: "O ImobiBrasil tem o melhor atendimento do mercado e um CRM completo que permite a abordagem livre dos leads interessados. Os clientes ImobiBrasil vendem mais porque nosso site é otimizado para o Google e nosso sistema é integrado com WhatsApp e portais de imóveis."
  },
  {
    id: 2,
    question: "O CRM possui integração com portais de anúncios?",
    answer: "Sim, o ImobiBrasil oferece integração com todos os grandes portais do Brasil, otimizando o seu tempo, já que você não precisa perdê-lo cadastrando manualmente seus imóveis em cada portal."
  },
  {
    id: 3,
    question: "É possível migrar meus imóveis de outro sistema?",
    answer: "Sim, para a importação é necessário um XML nos formatos tradicionais dos portais (ZapImóveis, VivaReal ou ImóvelWeb). Também é possível fazer a importação por planilhas Excel."
  },
  {
    id: 4,
    question: "Existe tempo mínimo de permanência?",
    answer: "NÃO! Para nós, sua satisfação é o que importa. Por isso, não exigimos nenhum tempo mínimo de permanência, nem geramos contrato de fidelidade. Você estará totalmente livre de multas e taxas extras."
  },
  {
    id: 5,
    question: "Como funciona o suporte?",
    answer: "Nosso atendimento é o melhor do mercado. Em todos os canais (WhatsApp, Telefone, E-mail e Chat), você terá atendimento diretamente com pessoas, não robôs. Temos também uma Central de Ajuda completa."
  }
];

export const companyData = {
  name: "ImobiBrasil",
  tagline: "Sistema para Imobiliárias e Corretores",
  address: "Avenida Manoel Goulart, 505 - Sala 43, Centro, Presidente Prudente / SP",
  cnpj: "13.326.364/0001-08",
  phones: [
    { region: "SP - Presidente Prudente", number: "(18) 3222-0557" },
    { region: "SP - São Paulo", number: "(11) 4063-6343" },
    { region: "RJ - Rio de Janeiro", number: "(21) 4063-6693" },
    { region: "MG - Belo Horizonte", number: "(31) 4062-7793" }
  ],
  whatsapp: {
    commercial: "5518988227436",
    support: "5518991643479"
  },
  social: {
    facebook: "https://www.facebook.com/imobibrasil",
    instagram: "https://www.instagram.com/imobibrasil/",
    youtube: "https://www.youtube.com/imobibrasilbr"
  }
};