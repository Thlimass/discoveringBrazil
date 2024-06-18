# Discovering Brazil

O DiscoveringBrazil é um projeto desenvolvido para fornecer informações e trazer mais conhecimento sobre os estados brasileiros.


## Funcionalidades

- **Mapa Interativo**: Clique em um estado no mapa para ver suas curiosidades.
- **Seleção de Estado**: Use um dropdown para selecionar um estado e visualizar suas informações.
- **Informações Detalhadas**: Exibição de informações detalhadas sobre o estado selecionado, como capital, população, área territorial, clima, tradições culturais, comidas típicas, recursos naturais, data de fundação e idade.
- **Bandeiras dos Estados**: Tela adicional exibindo as bandeiras de cada estado.


## Estrutura do projeto
```
Projeto
├── index.html
├── map.html
├── curiosities.html
├── flags.html
├── css
│   └── styles.css
├── assets
│   └── fonts.css
├── data
│   └── curiosities.json
└── README.md
```


## Como Usar o Projeto

### Pré-requisitos

Você precisa de um navegador web moderno para visualizar este projeto.

### Passos para Rodar o Projeto

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. **Navegue até o diretório do projeto**:
    ```bash
    cd seu-repositorio
    ```

3. **Abra o arquivo `index.html` em um navegador**:
    - Você pode abrir diretamente clicando duas vezes no arquivo ou arrastando o arquivo para uma janela do navegador.

## Navegação do Projeto

1. **Mapa Interativo**:
    - Acesse `map.html` para interagir com o mapa.
    - Clique em um estado para ser redirecionado para a página `curiosities.html` com as informações do estado selecionado.

2. **Página de Curiosidades**:
    - Acesse `curiosities.html` para usar o dropdown de seleção de estados e ver suas informações detalhadas.

3. **Página de Bandeiras**:
    - Acesse `flags.html` para ver as bandeiras de cada estado brasileiro.

## Adicionar Novas Curiosidades

1. **Edite o arquivo `curiosities.json`**:
    - Adicione um novo objeto com as informações do estado seguindo o formato existente.

    ```json
    {
        "state": "Nome do Estado",
        "federative_unit": "UF",
        "capital": "Capital",
        "population": "População",
        "territorial_area": "Área Territorial",
        "municipalities": "Quantidade de Municípios",
        "climate": "Clima",
        "time_zone": "Fuso Horário",
        "cultural_traditions": "Tradições Culturais",
        "typical_foods": ["Comida Típica 1", "Comida Típica 2"],
        "natural_resources": "Recursos Naturais",
        "date_of_fundation": "Data de Fundação",
        "age": "Idade"
    }
    ```

2. **Salve as alterações e recarregue a página** para ver as novas informações no dropdown e no mapa interativo.

## Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Commite suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Tecnologias Usadas

- **HTML**: Estrutura do projeto.
- **CSS**: Estilos e layout.
- **JavaScript**: Funcionalidades interativas e manipulação de dados.
- **JSON**: Armazenamento de dados das curiosidades dos estados.

## Autores

- [Thiago Lima](https://github.com/Thlimass) - Desenvolvedor
- [Cailan Victor](https://github.com/ryukendo1522) - Desenvolvedor
