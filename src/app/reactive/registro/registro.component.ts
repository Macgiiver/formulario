import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

moment.locale('es')

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   hora:any = moment();

  FormularioIngreso: FormGroup = this.fb.group({
    fechaingreso:['',[Validators.required,]],
    horaIngreso:[this.hora.format('LT'),[Validators.required]],
    cedula:['',[Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10)]],
  })

  FormularioSalida: FormGroup = this.fb.group({
    fechasalida:['',[Validators.required,]],
    horaSalida:[this.hora.format('LT'),[Validators.required]],
    cedula:['',[Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10)]],
  })

  constructor(private fb: FormBuilder) {  
    const hoy = moment();
    console.log(this.hora.format('LT'));
   }

  ngOnInit(): void {
  }

  campoValidoIngreso(value: string){
    return this.FormularioIngreso.controls[value].errors 
           && this.FormularioIngreso.controls[value].touched;
  }

  campoValidoSalida(value: string){
    return this.FormularioSalida.controls[value].errors 
           && this.FormularioSalida.controls[value].touched;
  }

  GuardarIngreso(){
    if(this.FormularioIngreso.invalid){
      this.FormularioIngreso.markAllAsTouched();
    }
    console.log(this.FormularioIngreso.value);
    this.FormularioIngreso.setValue({
      fechaingreso: '',
      horaIngreso: this.hora.format('LT'),
      cedula: ''
    })
  }

  GuardarSalida(){
    if(this.FormularioSalida.invalid){
      this.FormularioSalida.markAllAsTouched();
    }
    console.log(this.FormularioSalida.value);
    this.FormularioSalida.setValue({
      fechasalida: '',
      horaSalida: this.hora.format('LT'),
      cedula: ''
    })
  }

}
