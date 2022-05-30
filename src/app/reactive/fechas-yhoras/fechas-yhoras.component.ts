import { Component, OnInit } from '@angular/core';
import { ServiceEmpleadoService } from '../../service/service-empleado.service';

@Component({
  selector: 'app-fechas-yhoras',
  templateUrl: './fechas-yhoras.component.html',
  styleUrls: ['./fechas-yhoras.component.css']
})
export class FechasYhorasComponent implements OnInit {
  
  date:any
  date2:any

  constructor(private service:ServiceEmpleadoService) { }

  ngOnInit(): void {
    this.service.getEmpleadoRegistro().subscribe(data => {
      this.date= data;
    })

    this.service.getEmpleadoRegistroSalida().subscribe(data => {
      this.date2= data;
    })
  }

}
