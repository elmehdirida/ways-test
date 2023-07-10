describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=slideruicomponent--primary'));
  it('should render the component', () => {
    cy.get('ways-test-slider-ui').should('exist');
  });
});
