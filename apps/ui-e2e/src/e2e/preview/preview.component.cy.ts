describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=previewcomponent--primary'));
  it('should render the component', () => {
    cy.get('ways-test-preview').should('exist');
  });
});
