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

@Component({
  selector: "app-dynamic-field",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.scss"],
})
export class DynamicFieldComponent implements AfterViewInit{

  supportedDynamicComponents = [
    {
      name: 'text',
      component: DynamicInputComponent
    },
    {
      name: 'number',
      component: DynamicInputComponent
    },
    {
      name: 'select',
      component: DynamicSelectComponent
    },
    {
      name: 'radio',
      component: DynamicRadioComponent
    },
    {
      name: 'date',
      component: DynamicInputComponent
    },
    {
      name: 'checkbox',
      component: DynamicCheckboxComponent
    }
  ]
  @ViewChild('dynamicInputContainer', { read: ViewContainerRef}) dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName: FormGroup | undefined;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type)
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic?.component || DynamicInputComponent;
  }

}
