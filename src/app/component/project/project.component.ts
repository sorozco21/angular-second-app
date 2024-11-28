import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { Employee } from '../../model/interface/Role';
import { Client } from '../../model/class/Class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit{

  clientService = inject(ClientService);

  projectForm : FormGroup = new FormGroup({
    clientProjectId : new FormControl(0),
    projectName : new FormControl(''),
    startDate : new FormControl(''),
    expectedEndDate : new FormControl(''),
    leadByEmpId : new FormControl(''),
    completedDate : new FormControl(''),
    contactPerson : new FormControl(''),
    contactPersonContactNo : new FormControl(''),
    totalEmpWorking : new FormControl(''),
    projectCost : new FormControl(''),
    projectDetails : new FormControl(''),
    contactPersonEmailId : new FormControl(''),
    clientId : new FormControl(''),
  });

  employeeList : Employee[] =[]
  clientList : Client[] = []

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.clientService.getAllEmployees().subscribe({
      next: (res) => this.employeeList = res.data,
      error: (err) => alert(err)
    })
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe({
      next: (res) => this.clientList = res.data,
      error: (err) => alert(err)
    })
  }

  onSubmit(){
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.addUpdateProject(formValue).subscribe({
      next: (res) => alert(res.message),
      error: (err) => alert(err.message)
    });
    this.projectForm.reset({ clientId: '',leadEmpById:'' });
  }
}
