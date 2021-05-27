const data = {
    title: "Meu currículo",
    name: "Miguel da Silva Ribeiro",
    profession: "Técnico em Mecatrônica",
    description: 'Estudando Engenharia de Controle e Automação na Unicamp',
    experience: [{
        company: 'Robert Bosch',
        office: 'Estagiário Técnico',
        description: 'Técnico do laboratório responsável pela instrumentação de veículos para testes'
    },
    {
        company: 'PIBIC-EM',
        office: 'Bolsista',
        description: 'Confecção de kit didático de uma máquina de ensaios em pequena escala que pudesse ser utilizada em sala de aula pelos alunos do curso durante as aulas'
    }],
    education: [{
        institution: 'Unicamp',
        description: 'Graduando em Engenharia de Controle e Automação'
    },
    {
        institution: 'Cotuca',
        description: 'Téncico em Mecatrônica integrado ao Ensino Médio'
    }],
    skills: ['CAD 3D', 'Matlab', 'Java', 'C', 'Python']
}

module.exports = data;