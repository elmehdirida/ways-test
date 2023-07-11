import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMosineComponent } from './main-mosine.component';

describe('MainMosineComponent', () => {
  let component: MainMosineComponent;
  let fixture: ComponentFixture<MainMosineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMosineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainMosineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
