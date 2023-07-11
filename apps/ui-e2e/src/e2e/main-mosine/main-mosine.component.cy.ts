describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mainmosinecomponent--primary'));
  it('should render the component', () => {
    cy.get('ways-test-main-mosine').should('exist');
  });
});
