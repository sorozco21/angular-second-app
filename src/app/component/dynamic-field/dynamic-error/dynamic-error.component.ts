import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { TextField, RadioField, CheckboxField, SelectField, TextAreaField } from '../../../model/interface/form.models';

@Component({
  selector: 'app-dynamic-error',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-error.component.html',
  styleUrl: './dynamic-error.component.scss'
})
export class DynamicErrorComponent implements OnInit {
  formName!: FormGroup;
  @Input()
  field!: any;//TextField | RadioField | CheckboxField | SelectField | TextAreaField;

  constructor(private formgroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
    console.log('logging field in error component : ',this.field)
  }
}
