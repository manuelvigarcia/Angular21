import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidadorCuenta } from './validadores/validador_cuenta';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App  implements OnInit{
  protected readonly title = signal('12_formulario_reactivo');

  error:boolean=false;

  formReact=new FormGroup({
    usuario: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    telefono: new FormControl('',[Validators.required, Validators.pattern('[0-9]{9}')]),
    profesional: new FormControl(),
    instagram: new FormControl(''),
  });

  ngOnInit():void{
    this.formReact.get("profesional").valueChanges
        .subscribe(v=>{
          if(v){
            this.formReact.get("instagram").addValidators([Validators.required,ValidadorCuenta])
          }else{
            this.formReact.get("instagram").clearValidators()
          }
          this.formReact.get("instagram").updateValueAndValidity();
        })
  }
  guardar(){
    this.error=this.formReact.invalid;
    if(this.error){
      alert("Revise los mensajes de error.")
      return;
    }
    alert("Todo ha ido bien.")
  }
}
