import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTs } from './menu.js';

describe('MenuTs', () => {
  let component: MenuTs;
  let fixture: ComponentFixture<MenuTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTs],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
