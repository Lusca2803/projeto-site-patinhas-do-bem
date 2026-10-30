# Patinhas do Bem – Site institucional de ONG (projeto acadêmico)

> **Projeto acadêmico.** A ONG "Patinhas do Bem" é fictícia e este site é apenas um protótipo.
> Nenhuma mensagem é enviada e nenhum dado é coletado ou armazenado.

## Integrantes
| Nome | RGM |
|---|---|
| Guilherme da Silva Ferreira Batista | 47302518 |
| Guilherme Petrucelli Domingos | 47270161 |
| Jaime Luiz de Oliveira Neto | 47336951 |
| Leonardo Alves Tavares Calixta | 47323485 |
| Lucas Henrique Roque Cruz | 47178922 |
| Matheus Montagner | 47209470 |
| Renan Silva dos Santos | 47203099 |
| Vinicius Marques de Melo | 47213426 |
| Vinicius Scherer Di Giorno | 47028238 |


## Objetivo
Divulgar a atuação de uma ONG de proteção animal (resgate, castração e adoção de cães e gatos),
integrando HTML5 semântico, CSS3 e JavaScript básico, sem frameworks e sem backend.

## Páginas
| Arquivo | Conteúdo |
|---|---|
| `index.html` | Apresentação, causa defendida, imagem de destaque e chamadas para projetos/participação |
| `sobre.html` | História, missão, público atendido, objetivos e perguntas frequentes (interação JS) |
| `projetos.html` | Três iniciativas com descrição, imagem e forma de contribuição |
| `contato.html` | Orientações de voluntariado e formulário com validação (envio simulado) |

## Funcionalidades JavaScript (`js/script.js`)
1. **Formulário validado** (`contato.html`): evento `submit` com `addEventListener()` e `preventDefault()`;
   lê os campos com `value` + `trim()`; valida nome (3+ caracteres), e-mail (formato básico),
   assunto (não vazio) e mensagem (10+ caracteres); exibe erro ou confirmação **simulada** na página.
2. **Mostrar/ocultar perguntas frequentes** (`sobre.html`): botão com evento `click`
   (`addEventListener()`), função `alternarFaq()` que mostra/oculta o painel e troca o texto do botão.

## Estrutura de arquivos
```
ONG_PatinhasDoBem/
├── index.html · sobre.html · projetos.html · contato.html
├── css/estilos.css
├── js/script.js
├── img/  (logo, hero, sobre, projeto1–3)
└── README.md
```

## Como executar
Não há instalação. Extraia o ZIP e abra o arquivo `index.html` em qualquer navegador
(Chrome, Edge, Firefox). Navegue pelo menu entre as quatro páginas.

## Fontes e créditos
- Textos: elaborados pela equipe (ONG fictícia).
- Imagens (`img/`): **[PREENCHER: informe a origem de cada imagem – ex.: gerada com a ferramenta X / banco de imagens Y, com link e licença]**.
- Nenhum framework ou biblioteca externa foi utilizado.
