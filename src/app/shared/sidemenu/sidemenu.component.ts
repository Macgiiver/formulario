import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Empleados',
      ruta: './G8/Empleados'
    },
    {
      texto: 'Registrar Fecha',
      ruta: './G8/Registro'
    },
    {
      texto: 'Registro Global',
      ruta: './G8/FechaHora'
    },
  ];
}
