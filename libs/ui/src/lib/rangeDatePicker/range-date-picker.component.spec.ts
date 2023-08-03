import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RangeDatePickerComponent } from '@ways-test/ui';

describe('RangeDatePickerComponent', () => {
  let component: RangeDatePickerComponent;
  let fixture: ComponentFixture<RangeDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeDatePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RangeDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
