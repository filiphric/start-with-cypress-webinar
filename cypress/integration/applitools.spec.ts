it('visual testing', () => {

  cy
    .visit('/');

  cy
    .eyesOpen({
      appName: 'Trello'
    });

  cy.get('[data-cy=board-item]')
    .should('be.visible')

  cy
    .eyesCheckWindow('Board list');

  cy
    .eyesClose();

})