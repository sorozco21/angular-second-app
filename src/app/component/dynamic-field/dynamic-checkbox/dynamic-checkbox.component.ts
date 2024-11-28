import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-dynamic-checkboxs",
  imports:[ReactiveFormsModule,],
  templateUrl: "./dynamic-checkbox.component.html",
  styleUrls: ["./dynamic-checkbox.component.scss"],
})
export class DynamicCheckboxComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }
}
