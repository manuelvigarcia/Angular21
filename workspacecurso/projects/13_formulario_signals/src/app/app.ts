import { CuadroDialogo } from './ui/cuadro-dialogo/cuadro-dialogo';
import { MatDialog } from '@angular/material/dialog';
import { Component, computed, effect, signal } from '@angular/core';
import { form, required, minLength, email, pattern, validate, FormField } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('13_formulario_signals');
  error:boolean=false;
      //inicialización de controles
      model = signal({
        usuario: '',
        email: '',
        password: '',
        telefono: '',
        profesional: false,
        instagram: ''
      });

    formClients = form(this.model, (p) => {
      required(p.usuario);
      // minLength(p.usuario, 3);

      required(p.email);
      email(p.email);

      required(p.password);
      minLength(p.password, 6);

      required(p.telefono);
      pattern(p.telefono, /^[0-9]{9}$/);

      required(p.instagram, {
        when: ({ valueOf }) => valueOf(p.profesional)
        //si hubiera importado valueOf, lo anterior sería equivalente a:
        //when: ()=>valueOf(p.profesional)
      });

      validate(p.instagram, ({ value, valueOf }) => {
        if (!valueOf(p.profesional)) {
          return undefined;
        }

        let instagram = value()?.trim();
        if (!instagram) {
          return undefined;
        }

        if (instagram.includes('@')) {
          return undefined;
        }

        return {
          kind: 'invalido',
          errorInst: 'Debe incluir una @'
        };
      });
    });

  formInvalid = computed(() => {
    return (
      this.formClients.usuario().invalid() ||
      this.formClients.email().invalid() ||
      this.formClients.password().invalid() ||
      this.formClients.telefono().invalid() ||
      this.formClients.instagram().invalid()
    );
  });


private readonly usuarioValue = computed(() => this.model().usuario);
  dialog: any;

  constructor(dialog:MatDialog) {

    effect(() => {

      const usuario = this.usuarioValue();

      //actualiza el campo el email con el valor del usuario en caso de que sean diferentes

      this.model.update(prev => ({ ...prev, email: usuario }));

    });

  }

  procesar():void{
    if(this.formInvalid){
      this.error=true
      this.dialog.open(CuadroDialogo,{data:{titulo:"Error",mensaje:"Formulario no válido."}})
    }else{
      this.dialog.open(CuadroDialogo,{data:{titulo:"Info",mensaje:"Formulario correcto."}})
    }
  }

}











