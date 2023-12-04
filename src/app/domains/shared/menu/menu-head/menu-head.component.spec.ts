import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeadComponent } from './menu-head.component';

describe('MenuHeadComponent', () => {
  let component: MenuHeadComponent;
  let fixture: ComponentFixture<MenuHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
