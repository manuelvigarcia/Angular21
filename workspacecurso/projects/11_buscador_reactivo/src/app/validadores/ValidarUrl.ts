import { AbstractControl, ValidationErrors } from "@angular/forms";

// return(null) es que devuelve "ningún error", es decir, todo va bien.
export function validadorUrl(control: AbstractControl): ValidationErrors | null{
  const value:string = control.value;
  if (!value) {
    return null; // no actua si está vacío, eso se controla con Validators.required
  }
  if(value.startsWith("http")){
    return null;
  }
  return {errorUrl:"Debe comenzar por HTTP"}
}
