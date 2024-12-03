import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {DynamicInputComponent} from "./dynamic-input/dynamic-input.component";
import {DynamicSelectComponent} from "./dynamic-select/dynamic-select.component";
import {DynamicRadioComponent} from "./dynamic-radio/dynamic-radio.component";
import {DynamicCheckboxComponent} from "./dynamic-checkbox/dynamic-checkbox.component";
import { DynamicFileUploadComponent } from "./dynamic-file-upload/dynamic-file-upload.component";


@Component({
  selector: "app-dynamic-field",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.scss"],
})
export class DynamicFieldComponent implements AfterViewInit{

  @ViewChild('dynamicInputContainer', { read: ViewContainerRef}) dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName: FormGroup | undefined;

// Map of supported dynamic components
  private readonly supportedDynamicComponents: Record<string, any> = {
    text: DynamicInputComponent,
    number: DynamicInputComponent,
    select: DynamicSelectComponent,
    radio: DynamicRadioComponent,
    date: DynamicInputComponent,
    checkbox: DynamicCheckboxComponent,
    file: DynamicFileUploadComponent, 
  };

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }
  private registerDynamicField(): void {
    if (!this.field || !this.field.type) {
      console.error('Field type is missing or invalid');
      return;
    }

    const component = this.getComponentByType(this.field.type);
    if (!component) {
      console.error(`No component found for type: ${this.field.type}`);
      return;
    }

    // Create the dynamic component
    const dynamicComponentRef = this.dynamicInputContainer.createComponent(component);

    // Pass inputs to the dynamic component
    dynamicComponentRef.setInput('field', this.field);

    // Trigger change detection to render the component
    this.cd.detectChanges();
  }

  private getComponentByType(type: string): any {
    return this.supportedDynamicComponents[type] || DynamicInputComponent;
  }

}
