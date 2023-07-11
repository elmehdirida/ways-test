describe('ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=inputuicomponent--primary&args=textHolder;')
  );
  it('should render the component', () => {
    cy.get('ways-test-input-ui').should('exist');
  });
});
