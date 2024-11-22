import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/Role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit {

  masterService = inject(MasterService);
  designationList: IDesignation[] = [];
  isLoader: boolean = true;

  ngOnInit(): void {
    this.masterService.getAllDesignation().subscribe({
      next: (res) => { this.designationList = res.data; this.isLoader = false; },
      error: (e) => { this.isLoader = false; console.log(e); alert(e); }
    });
  }
}
