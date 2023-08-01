import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavDividerComponent } from '@ways-test/ui';

describe('SideNavDividerComponent', () => {
  let component: SideNavDividerComponent;
  let fixture: ComponentFixture<SideNavDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavDividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
