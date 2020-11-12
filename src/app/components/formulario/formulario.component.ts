import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formEmployer: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formEmployer = this.formBuilder.group({name: [], salary: [], age: []});
  }

  submit() {
    this.formValue.emit(this.formEmployer.value);
    console.log(this.formEmployer.value);
  }

}
