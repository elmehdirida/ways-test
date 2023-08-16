import { TestBed } from '@angular/core/testing';
import { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { Primary } from './button.component.stories';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // Add more tests for your component here

  // Use the Primary story as part of your unit tests
  it('should render primary button', async () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.label = Primary.args.label;
    component.disabled = Primary.args.disabled;
    component.badge = Primary.args.badge;

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(Primary.args.label);
  });
});
