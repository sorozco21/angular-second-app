import { Component } from '@angular/core';
import { FormFieldDefinition } from '../../model/interface/form.models';
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-employee',
  imports: [DynamicFormComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  model: FormFieldDefinition = {
    firstName: {
      type: 'text',
      label: 'First Name',
      value: '',
      rules: {
        required: {
          value: true,
          message: "This field is required.",
        },
        minLength: {
          value: 5,
          message: "Minimum length is 5 characters.",
        },
        maxLength: {
          value: 50,
          message: "Maximum length is 50 characters.",
        },
        pattern: {
          value: "^[a-zA-Z]+$", // Regular expression to allow only alphanumeric characters
          message: "Only alphabet characters are allowed.",
        },
      },
    },
    age: {
      type: 'number',
      label: 'Age',
      value: '',
      rules: {
        required: {
          value: true,
          message: "This field is required.",
        },
        min: {
          value: 18,
          message: "Value must be at least 18.",
        },
        max: {
          value: 100,
          message: "Value must be at most 100.",
        },
      },
    },
    birthDate: {
      type: 'date',
      label: 'Birth Date',
      value: '',
      rules: {
        required: {
          value: true,
          message: "This field is required.",
        },
      },
    },
  };

  // Custom submit handler defined in the parent component
  onFormSubmit(formData: any) {
    console.log('Form submitted with data:', formData);
    // Process the data (e.g., send to an API)
  }
}
