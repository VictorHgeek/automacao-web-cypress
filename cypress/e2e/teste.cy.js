describe('Automação de Cenários com Cypress', () => {
    // Abrir o site apenas uma vez, antes de todos os testes
    before(() => {
      cy.visit('https://todomvc.com/examples/riotjs/');
    });
  
    it('Deve inserir uma tarefa', () => {
      
      cy.get('input.new-todo').type('Inserindo tarefa para teste{enter}');
    });
  
    it('Deve validar a tarefa inserida', () => {
    
      cy.get('ul.todo-list li').first().find('label').should('contain.text', 'Inserindo tarefa para teste');
    });
  
    it('Deve marcar a tarefa como concluída', () => {
     
      cy.get('ul.todo-list li').first().find('input.toggle').click();
    });
  
    it('Deve abrir a aba Completed', () => {
      
      cy.get('a[href="#/completed"]').click();
    });
  
    it('Deve validar a tarefa na aba Completed', () => {
      
      cy.get('ul.todo-list li').first().find('label').should('contain.text', 'Inserindo tarefa para teste');
    });
  
    it('Deve limpar a aba Completed', () => {
      
      cy.get('button.clear-completed').click();
    });
  
    after(() => {
      
      cy.clearCookies();
    });
  });
  