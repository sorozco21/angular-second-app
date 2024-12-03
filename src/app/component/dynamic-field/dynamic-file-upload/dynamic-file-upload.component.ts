import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FileSizeValidatorDirective } from '../../../directive/file-size-validator.directive';

@Component({
  selector: 'app-dynamic-file-upload',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-file-upload.component.html',
  styleUrl: './dynamic-file-upload.component.scss'
})
export class DynamicFileUploadComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }

  onFileChange(event: Event, fieldName: string): void {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files); // Array of selected files
      console.log('Selected files:', files);
      console.log('File(s) in form before update:', this.formName.get(fieldName)?.value);
  
      // Update the FormControl manually with the `File` object(s)
      this.formName.get(fieldName)?.setValue(files.length === 1 ? files[0] : files);
      this.formName.get(fieldName)?.updateValueAndValidity();
      console.log('File(s) in form after update:', this.formName.get(fieldName)?.value.name);
    } else {
      // Clear the FormControl value if no file is selected
      this.formName.get(fieldName)?.setValue(null);
    }
  }
  
}
