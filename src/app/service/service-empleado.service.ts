import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpleadoService {

  constructor(private http:HttpClient) { 

  }
  //realiza la peticion get la url de la api rest simulada esta en "enviroment"
  getEmpleadoRegistro(){
    return this.http.get(environment.EmpleadosFechas);
  }

  getEmpleadoRegistroSalida(){
    return this.http.get(environment.EmpleadosFechaSalida);
  }
}
