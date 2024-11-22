import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from "../designation/designation.component";

@Component({
  selector: 'app-master',
  imports: [CommonModule, RolesComponent, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

  currentTab : string = 'roles';

  changeTab(tab : string){
    this.currentTab=tab;
  }
}
