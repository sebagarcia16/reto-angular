import { Component, OnInit } from '@angular/core';
import { EmployerCustom } from 'src/app/core/models/employers.model';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-visualizar-empleado',
  templateUrl: './visualizar-empleado.component.html',
  styleUrls: ['./visualizar-empleado.component.scss']
})
export class VisualizarEmpleadoComponent implements OnInit {

  employerData: EmployerCustom[];
  
  constructor(private employers: EmployersService) { }

  ngOnInit(): void {
    this.getEmployers();
  }

  getEmployers(): void {
    this.employers.getEmployers().subscribe((res) => {
        this.employerData = res;
    });
  }

  getFormValue(values) {

    this.deleteEmployer(values);
    //console.log('Values from parent', values);

  }

  deleteEmployer(values) {

    this.employers.deleteEmployee(values).subscribe((res) => {
      console.log('Respuesta al eliminar el empleado', res);
    });
  }



}
