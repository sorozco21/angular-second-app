import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { BaseField, BaseFieldRules, FieldRules, FormFieldDefinition } from '../../model/interface/form.models';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from "../dynamic-field/dynamic-field.component";
import { DynamicErrorComponent } from "../dynamic-field/dynamic-error/dynamic-error.component";

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule, DynamicFieldComponent, DynamicErrorComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit{

  
  @Input() model: FormFieldDefinition = {};
  @Input() submit!: (formData : any) => void;

  public dynamicFormGroup!: FormGroup;
  public fields : any[] = [];

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }
  private getFormControlsFields(): { [key: string]: FormControl } {
    const formGroupFields: { [key: string]: FormControl } = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);

      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({ ...fieldProps, fieldName: field }); // Keep track of field metadata
    }
    console.log(this.fields)
    return formGroupFields;
  }

  private addValidator(rules: FieldRules | undefined): ValidatorFn[] {
    if (!rules) {
      return []; // No rules, return empty validator array
    }
  
    const validators: ValidatorFn[] = [];
  
    // Map between rule keys and Angular Validators
    const ruleToValidatorMap: Record<string, (value: any) => ValidatorFn> = {
      required: () => Validators.required,
      min: (value: number) => Validators.min(value),
      max: (value: number) => Validators.max(value),
      minLength: (value: number) => Validators.minLength(value),
      maxLength: (value: number) => Validators.maxLength(value),
      pattern: (value: string) => Validators.pattern(value),
    };
  
    // Iterate over each rule key and apply the corresponding validator
    for (const [key, rule] of Object.entries(rules)) {
      const validatorFn = ruleToValidatorMap[key];
      if (validatorFn && rule?.value !== undefined) {
        validators.push(validatorFn(rule.value));
      } 
    }
  
    return validators;
  }

  // Dynamic submit handler passed by the parent
  onSubmit() {
    if (this.dynamicFormGroup.valid) {
      // Capture form values
      const formData = this.dynamicFormGroup.value;
      // Pass the form data to the parent's custom submit handler
      this.submit(formData);
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(form: FormGroup) {
    console.log(form.value)
    form.reset()
    console.log(form.value)
  }
}
