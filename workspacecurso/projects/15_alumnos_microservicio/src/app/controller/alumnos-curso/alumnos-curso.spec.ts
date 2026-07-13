import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosCurso } from './alumnos-curso';

describe('AlumnosCurso', () => {
  let component: AlumnosCurso;
  let fixture: ComponentFixture<AlumnosCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosCurso],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnosCurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
