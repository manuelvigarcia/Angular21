import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-menu-controller',
  imports: [RouterModule],
  templateUrl: './menu-controller.html',
  styleUrl: './menu-controller.css',
})
export class MenuController {
  constructor(router:Router){
    router.navigate(["/buscar"]);  // para poner un sub componente al iniciar.
  }
}
