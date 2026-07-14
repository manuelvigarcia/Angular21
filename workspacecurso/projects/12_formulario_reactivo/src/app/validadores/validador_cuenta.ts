import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ValidadorCuenta (control: AbstractControl): ValidationErrors | null{
  const value:string = control.value;
  if(!value){
    return null; // Este no actúa si el campo está vacío, eso se controla con Validators.required
  }
  if(value.includes("@")){
    return null; // Valor correcto cuando incluye un carácter '@'
  }
  return {textoInstagram:"Debe incluir carácter @"}
}
