# 📝 Mermaid Live Editor - Markdown Previewer

## 📋 Descrição do Projeto
Este projeto é um editor de Markdown especializado na renderização em tempo real de diagramas **Mermaid**. Ele foi desenvolvido para facilitar a criação de documentações técnicas, fluxogramas e diagramas de sequência de forma dinâmica e intuitiva.

O objetivo principal é oferecer uma interface fluida onde o usuário pode escrever código Markdown e visualizar instantaneamente tanto a formatação de texto quanto a construção complexa de gráficos, eliminando a necessidade de ferramentas externas de exportação durante o processo criativo.

---

## 🚀 Funcionalidades Principais
* **Live Rendering:** Renderização instantânea de diagramas Mermaid conforme você digita.
* **Suporte Multidiagrama:** Compatibilidade com Flowcharts, Sequence Diagrams, Gantt Charts, Class Diagrams e mais.
* **Markdown Standard:** Suporte completo para sintaxe CommonMark e GFM (GitHub Flavored Markdown).
* **Interface Minimalista:** Foco total na produtividade e clareza do código.

---

## 🛠️ Tecnologias Utilizadas
* **Markdown Engine:** Parser de alto desempenho para conversão de texto em HTML.
* **Mermaid.js:** Biblioteca principal para geração de diagramas a partir de texto.
* **Interface:** HTML5, CSS3 e JavaScript Moderno (ES6+).
* **Live Preview:** Sistema de sincronização de estado para renderização assíncrona.

---

## 📊 Exemplos de Uso

### 1. Fluxogramas (Flowcharts)
Ideal para mapear processos e lógicas de decisão:
```mermaid
graph TD
    A[Início] --> B{Funciona?}
    B -- Sim --> C[Excelente!]
    B -- Não --> D[Revisar Código]
    D --> B

    [Voltar ao início](https://github.com/joao-felipe-de-sousa-pires)
