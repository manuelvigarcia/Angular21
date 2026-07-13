import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('12_formulario_reactivo');

  formReact=new FormGroup({
    usuario: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    telefono: new FormControl('',[Validators.required, Validators.pattern('[ 0-9]{9}')]),
    profesional: new FormControl(),
    instagram: new FormControl(''),
  });

  constructor(){
    this.formReact.get("profesional").valueChanges
        .subscribe(v=>{
          if(v){
            this.formReact.get("instagram").addValidators(Validators.required)
          }else{
            this.formReact.get("instagram").removeValidators(Validators.required)
          }
          this.formReact.get("instagram").updateValueAndValidity();
        })
  }
  guardar(){
    if(this.formReact.invalid){
      alert("Revise los mensajes de error.")
      return;
    }
    alert("Todo ha ido bien.")
  }
}
