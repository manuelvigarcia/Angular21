import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCursos } from './buscar-cursos';

describe('BuscarCursos', () => {
  let component: BuscarCursos;
  let fixture: ComponentFixture<BuscarCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarCursos],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarCursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
