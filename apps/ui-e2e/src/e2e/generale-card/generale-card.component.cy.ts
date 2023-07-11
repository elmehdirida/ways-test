describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=generalecardcomponent--primary'));
  it('should render the component', () => {
    cy.get('ways-test-generale-card').should('exist');
  });
});
