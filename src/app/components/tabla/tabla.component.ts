import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { EmployerCustom } from 'src/app/core/models/employers.model'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input() employerData: EmployerCustom[] = [];
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formEmployer: FormGroup;
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'employeeSalary',
    'employeeAge',
    'employeeEdit',
    'employeeDelete'
  ];
  dataSource: MatTableDataSource<EmployerCustom>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formEmployer = this.formBuilder.group({id: []});
  }

  delete() {
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.employerData);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
