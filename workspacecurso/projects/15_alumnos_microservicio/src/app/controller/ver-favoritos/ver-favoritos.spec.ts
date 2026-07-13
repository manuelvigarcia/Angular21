import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFavoritos } from './ver-favoritos';

describe('VerFavoritos', () => {
  let component: VerFavoritos;
  let fixture: ComponentFixture<VerFavoritos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerFavoritos],
    }).compileComponents();

    fixture = TestBed.createComponent(VerFavoritos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
