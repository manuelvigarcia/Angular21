import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validadorCurso(control: AbstractControl): ValidationErrors | null{
  const value:string = control.value;
  if (!value) {
    return null; // no actua si está vacío, eso se controla con Validators.required
  }
  if(value.toLowerCase().includes("avanzado")){
    return {cursoAvanzado:"El nombre del curso no debe incluir la palabra 'avanzado'."};
  }
  return null; // Todo ha ido bien
}
