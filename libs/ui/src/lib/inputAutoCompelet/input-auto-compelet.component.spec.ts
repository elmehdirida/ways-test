import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAutoCompeletComponent } from '@ways-test/ui';

describe('InputAutoCompeletComponent', () => {
  let component: InputAutoCompeletComponent;
  let fixture: ComponentFixture<InputAutoCompeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAutoCompeletComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAutoCompeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
