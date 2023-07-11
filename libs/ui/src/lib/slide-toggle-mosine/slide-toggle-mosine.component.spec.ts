import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideToggleMosineComponent } from './slide-toggle-mosine.component';

describe('SlideToggleMosineComponent', () => {
  let component: SlideToggleMosineComponent;
  let fixture: ComponentFixture<SlideToggleMosineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideToggleMosineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideToggleMosineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
