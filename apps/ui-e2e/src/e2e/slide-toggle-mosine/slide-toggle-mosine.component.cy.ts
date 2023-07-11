describe('ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=slidetogglemosinecomponent--primary')
  );
  it('should render the component', () => {
    cy.get('ways-test-slide-toggle-mosine').should('exist');
  });
});
