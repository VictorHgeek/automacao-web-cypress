Projeto de Automação de Testes com Cypress<br>
Este projeto é uma automação de testes de um site de gerenciamento de tarefas utilizando Cypress e Mochawesome para relatórios. Ele realiza uma série de cenários, incluindo a inserção, validação e conclusão de tarefas, utilizando o site TodoMVC - Riot.js.<br>

Estrutura de Pastas<br>
<br>
cypress/<br>
  ├── e2e/                 # Arquivos dos testes e2e<br>
  │   └── teste.cy.js       # Arquivo com os cenários de testes<br>
  └── reports/              # Pasta onde os relatórios JSON e HTML são gerados<br>

Tecnologias Utilizadas<br>
Cypress - Framework de testes end-to-end<br>
Mochawesome - Geração de relatórios de teste<br>
Mochawesome-merge - Mesclagem de relatórios<br>
Mochawesome-report-generator - Gerador de relatórios em HTML<br>

Pré-requisitos<br>
Node.js (versão 14 ou superior)<br>
NPM (ou Yarn)<br>
Cypress (versão 12.0.0 ou superior)<br>

Instalação<br>
Clone este repositório:<br>

Cenários de Testes<br>
Abrir o site<br>
Inserir uma tarefa<br>
Validar a tarefa inserida<br>
Marcar a tarefa como concluída<br>
Abrir a aba de tarefas concluídas<br>
Validar tarefa na aba concluída<br>
Limpar tarefas concluídas<br>
Os testes complementam-se entre si, dependendo poderá ser necessário utilizar o cypress.config para atender sua necessidade de visualização.
