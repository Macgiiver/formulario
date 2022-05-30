import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FechasYhorasComponent } from './fechas-yhoras/fechas-yhoras.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'Empleados', component: EmpleadosComponent},
      {path: 'Registro', component: RegistroComponent},
      {path: 'FechaHora', component: FechasYhorasComponent},
      {path: '**', redirectTo: 'Empleados'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
