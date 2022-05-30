import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

    FormularioEmpleado: FormGroup = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
      apellido:['',[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
      edad:['',[Validators.required,Validators.minLength(2),Validators.min(0)]],
      cargo:['',[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
      cedula:['',[Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(8)]],
      celular:['',[Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10)]],
    })

  constructor( private fb: FormBuilder) { 

   }

   campoValido(value: string){
     return this.FormularioEmpleado.controls[value].errors 
            && this.FormularioEmpleado.controls[value].touched;
   }

   Guardar(){
     if(this.FormularioEmpleado.invalid){
       this.FormularioEmpleado.markAllAsTouched();
     }
     console.log(this.FormularioEmpleado.value);
     this.FormularioEmpleado.reset();
   }

  ngOnInit(): void {
  }

}
