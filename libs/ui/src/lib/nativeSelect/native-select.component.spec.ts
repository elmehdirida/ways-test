import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NativeSelectComponent } from '@ways-test/ui';

describe('NativeSelectComponent', () => {
  let component: NativeSelectComponent;
  let fixture: ComponentFixture<NativeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativeSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NativeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
