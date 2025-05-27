# SaúdeMap

O SaúdeMap é um aplicativo web que ajuda os usuários a encontrar pontos de saúde em João Pessoa/PB. Ele permite localizar hospitais, postos de saúde, farmácias e clínicas próximas à localização do usuário.

## Funcionalidades

- Busca por endereço ou CEP
- Uso de geolocalização
- Filtros por tipo de estabelecimento
- Visualização de informações detalhadas
- Indicação de distância e status de funcionamento
- Interface responsiva e amigável

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Módulos ES6
- Font Awesome (ícones)

## Estrutura do Projeto

```
/
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── data/
│       │   └── healthPoints.js
│       ├── utils/
│       │   ├── constants.js
│       │   ├── filters.js
│       │   └── render.js
│       └── script.js
└── index.html
```

## Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/saudemap.git
```

2. Abra o arquivo `index.html` em um servidor web local
   - Devido ao uso de módulos ES6, é necessário servir os arquivos através de um servidor HTTP
   - Você pode usar extensões como "Live Server" no VS Code ou qualquer outro servidor local

3. Acesse a aplicação em seu navegador

## Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 