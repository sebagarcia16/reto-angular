import { Component, OnInit } from '@angular/core';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent implements OnInit {

  constructor(private employers: EmployersService) { }

  ngOnInit(): void {
  }

  getFormValue(values) {

    this.createEmployer(values);
    //console.log('Values from parent', values);

  }

  createEmployer(values) {

    this.employers.createEmployee(values).subscribe((res) => {
      console.log('Respuesta al crear el empleado', res);
    });
  }

}
