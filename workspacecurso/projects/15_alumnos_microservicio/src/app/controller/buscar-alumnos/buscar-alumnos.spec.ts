import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlumnos } from './buscar-alumnos';

describe('BuscarAlumnos', () => {
  let component: BuscarAlumnos;
  let fixture: ComponentFixture<BuscarAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarAlumnos],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarAlumnos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
