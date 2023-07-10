import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderUiComponent } from './slider-ui.component';

describe('SliderUiComponent', () => {
  let component: SliderUiComponent;
  let fixture: ComponentFixture<SliderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
