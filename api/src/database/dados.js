const empresas = [
  {
    nome: "TechNova Soluções",
    email: "contato@technova.com"
  },
  {
    nome: "InovaTech",
    email: "contato@inovatech.com"
  },
  {
    nome: "Cloud Systems",
    email: "contato@cloudsystems.com"
  },
  {
    nome: "DataVision",
    email: "contato@datavision.com"
  },
  {
    nome: "App Solutions",
    email: "contato@appsolutions.com"
  },
  {
    nome: "WebTech Brasil",
    email: "contato@webtechbrasil.com"
  },
  {
    nome: "Quality Solutions",
    email: "contato@qualitysolutions.com"
  },
  {
    nome: "Nexa Sistemas",
    email: "contato@nexasistemas.com"
  }
];

const vagas = [
  {
    titulo: "Desenvolvedor(a) FrontEnd React",
    empresa: "TechNova Soluções",
    tipo: "remoto",
    tecnologias: ["React", "TypeScript", "CSS"],
    salario: "R$ 6.000 - R$ 9.000",
    cep: null,
    cidade: null,
    estado: null,
    descricao: "Desenvolvimento de interfaces modernas, responsivas e acessíveis."
  },
  {
    titulo: "Desenvolvedor(a) BackEnd Node.js",
    empresa: "TechNova Soluções",
    tipo: "hibrido",
    tecnologias: ["Node.js", "Express", "PostgreSQL"],
    salario: "R$ 7.000 - R$ 11.000",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Criação de APIs REST, integrações e manutenção de serviços backend."
  },
  {
    titulo: "Desenvolvedor(a) Full Stack",
    empresa: "InovaTech",
    tipo: "remoto",
    tecnologias: ["React", "Node.js", "MongoDB"],
    salario: "R$ 8.000 - R$ 12.000",
    cep: null,
    cidade: null,
    estado: null,
    descricao: "Atuação no desenvolvimento completo de aplicações web."
  },
  {
    titulo: "Desenvolvedor(a) Mobile",
    empresa: "App Solutions",
    tipo: "hibrido",
    tecnologias: ["React Native", "TypeScript", "Firebase"],
    salario: "R$ 6.500 - R$ 10.000",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Desenvolvimento e manutenção de aplicativos mobile multiplataforma."
  },
  {
    titulo: "Engenheiro(a) de Software",
    empresa: "Nexa Sistemas",
    tipo: "remoto",
    tecnologias: ["Java", "Spring Boot", "AWS"],
    salario: "R$ 9.000 - R$ 14.000",
    cep: null,
    cidade: null,
    estado: null,
    descricao: "Projeto e desenvolvimento de sistemas escaláveis em nuvem."
  },
  {
    titulo: "Desenvolvedor(a) Python",
    empresa: "DataVision",
    tipo: "hibrido",
    tecnologias: ["Python", "Django", "PostgreSQL"],
    salario: "R$ 7.000 - R$ 10.000",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Desenvolvimento de aplicações web e automações com Python."
  },
  {
    titulo: "DevOps Engineer",
    empresa: "Cloud Systems",
    tipo: "remoto",
    tecnologias: ["Docker", "Kubernetes", "AWS"],
    salario: "R$ 10.000 - R$ 15.000",
    cep: null,
    cidade: null,
    estado: null,
    descricao: "Automação de deploys, infraestrutura em nuvem e monitoramento."
  },
  {
    titulo: "Analista de Dados",
    empresa: "DataVision",
    tipo: "presencial",
    tecnologias: ["Python", "SQL", "Power BI"],
    salario: "R$ 5.500 - R$ 8.500",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Análise de dados, criação de dashboards e relatórios gerenciais."
  },
  {
    titulo: "Desenvolvedor(a) Angular",
    empresa: "WebTech Brasil",
    tipo: "remoto",
    tecnologias: ["Angular", "TypeScript", "RxJS"],
    salario: "R$ 6.500 - R$ 9.500",
    cep: null,
    cidade: null,
    estado: null,
    descricao: "Desenvolvimento de aplicações web com Angular e TypeScript."
  },
  {
    titulo: "QA / Analista de Testes",
    empresa: "Quality Solutions",
    tipo: "hibrido",
    tecnologias: ["Cypress", "Playwright", "JavaScript"],
    salario: "R$ 5.000 - R$ 8.000",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Planejamento e execução de testes automatizados em aplicações web."
  },
  {
    titulo: "Desenvolvedor(a) PHP",
    empresa: "WebTech Brasil",
    tipo: "presencial",
    tecnologias: ["PHP", "Laravel", "MySQL"],
    salario: "R$ 5.500 - R$ 9.000",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Desenvolvimento de sistemas web e integração com bancos de dados."
  },
  {
    titulo: "Administrador(a) de Banco de Dados",
    empresa: "Nexa Sistemas",
    tipo: "hibrido",
    tecnologias: ["SQL Server", "Oracle", "Linux"],
    salario: "R$ 8.000 - R$ 12.000",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Administração, otimização e segurança de bancos de dados corporativos."
  },
  {
    titulo: "Desenvolvedor(a) .NET",
    empresa: "TechNova Soluções",
    tipo: "presencial",
    tecnologias: ["C#", ".NET", "SQL Server"],
    salario: "R$ 7.000 - R$ 11.000",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Desenvolvimento de sistemas corporativos utilizando a plataforma .NET."
  },
  {
    titulo: "Analista de Suporte Técnico",
    empresa: "Cloud Systems",
    tipo: "presencial",
    tecnologias: ["Windows", "Linux", "Redes"],
    salario: "R$ 3.500 - R$ 5.500",
    cep: "38400-000",
    cidade: "Uberlândia",
    estado: "MG",
    descricao: "Suporte a usuários, manutenção de equipamentos e resolução de incidentes."
  },
  {
    titulo: "Desenvolvedor(a) FrontEnd Vue.js",
    empresa: "InovaTech",
    tipo: "remoto",
    tecnologias: ["Vue.js", "JavaScript", "Tailwind CSS"],
    salario: "R$ 6.000 - R$ 9.500",
    cep: null,
    cidade: null,
    estado: null,
    descricao: "Criação de interfaces modernas e componentizadas com Vue.js."
  }
];

module.exports = { empresas, vagas };