import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employer } from 'src/app/core/interfaces/employer-response.interface';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {

  @Input() name: string;
  @Input() salary: string;
  @Input() age: string;
  @Output() editEmployerEmiter: EventEmitter<Employer> = new EventEmitter<Employer>();
  constructor(private employers: EmployersService) { }

  ngOnInit(): void {
  }

  getFormValue(values) {

    this.updateEmployer(values);
    //console.log('Values from parent', values);

  }

  updateEmployer(values) {

    this.employers.editEmployee(values).subscribe((res) => {
      console.log('Respuesta al crear el empleado', res);
    });
  }

}
