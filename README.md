Projeto de Automação de Testes com Cypress
Este projeto é uma automação de testes de um site de gerenciamento de tarefas utilizando Cypress e Mochawesome para relatórios. Ele realiza uma série de cenários, incluindo a inserção, validação e conclusão de tarefas, utilizando o site TodoMVC - Riot.js.

Estrutura de Pastas
bash
Copiar código
cypress/
  ├── e2e/                 # Arquivos dos testes e2e
  │   └── teste.cy.js       # Arquivo com os cenários de testes
  └── reports/              # Pasta onde os relatórios JSON e HTML são gerados

Tecnologias Utilizadas
Cypress - Framework de testes end-to-end
Mochawesome - Geração de relatórios de teste
Mochawesome-merge - Mesclagem de relatórios
Mochawesome-report-generator - Gerador de relatórios em HTML
Pré-requisitos
Node.js (versão 14 ou superior)
NPM (ou Yarn)
Cypress (versão 12.0.0 ou superior)
Instalação
Clone este repositório:


Cenários de Testes
Abrir o site
Inserir uma tarefa
Validar a tarefa inserida
Marcar a tarefa como concluída
Abrir a aba de tarefas concluídas
Validar tarefa na aba concluída
Limpar tarefas concluídas
Os testes complementam-se entre si, então as ações executadas nos testes anteriores são aproveitadas pelos subsequentes.

Relatórios de Testes
Os relatórios dos testes são gerados utilizando Mochawesome.
