import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Basics_Componentes-FormularioClientes';

  clientes = [{nombre: "Cliente 1", cif: 'B 123', direccion: "C/ la la la", grupo: 1},
  {nombre: "Cliente 2", cif: 'A 334', direccion: "Av. lo lo lo", grupo: 2}];

}
