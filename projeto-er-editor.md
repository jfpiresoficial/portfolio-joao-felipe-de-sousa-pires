
# Mermaid Live Editor

![License](https://img.shields.io/github/license/seu-usuario/mermaid-live-editor)
![Version](https://img.shields.io/github/v/release/seu-usuario/mermaid-live-editor)

**Mermaid Live Editor** é uma ferramenta de edição Markdown com suporte nativo e renderização em tempo real para diagramas utilizando a sintaxe Mermaid. Este projeto visa facilitar a documentação técnica, permitindo que desenvolvedores criem fluxogramas e diagramas de sequência de forma ágil e visual diretamente no código.

## 📋 Descrição do Projeto
Este projeto é um editor de Markdown especializado na renderização em tempo real de diagramas **Mermaid**. Ele foi desenvolvido para facilitar a criação de documentações técnicas, fluxogramas e diagramas de sequência de forma dinâmica e intuitiva.

O objetivo principal é oferecer uma interface fluida onde o usuário pode escrever código Markdown e visualizar instantaneamente tanto a formatação de texto quanto a construção complexa de gráficos, eliminando a necessidade de ferramentas externas de exportação durante o processo criativo.
## 🚀 Funcionalidades

* **Live Rendering:** Renderização instantânea de diagramas Mermaid conforme você digita.
* **Suporte Multidiagrama:** Compatibilidade com Flowcharts, Sequence Diagrams, Gantt Charts, Class Diagrams e mais.
* **Markdown Standard:** Suporte completo para sintaxe CommonMark e GFM (GitHub Flavored Markdown).
* **Interface Minimalista:** Foco total na produtividade e clareza do código.

## 🛠️ Tecnologias Utilizadas
* **Markdown Engine:** Parser de alto desempenho para conversão de texto em HTML.
* **Mermaid.js:** Biblioteca principal para geração de diagramas a partir de texto.
* **Interface:** HTML5, CSS3 e JavaScript Moderno (ES6+).
* **Live Preview:** Sistema de sincronização de estado para renderização assíncrona.
## 📊 Exemplos de Uso

O editor suporta a renderização de exemplos práticos como:

### Fluxogramas
```mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Check code]
    D --> B

   
