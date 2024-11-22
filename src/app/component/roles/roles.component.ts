import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/Role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit{

  http = inject(HttpClient); // new way
  // constructor(private http: HttpClient){} //oldway

  baseUrl = 'https://freeapi.miniprojectideas.com/';
  roleList: IRole[] = [];

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<APIResponseModel>(this.baseUrl + 'api/ClientStrive/GetAllRoles')
      .subscribe((res: APIResponseModel) => {
        this.roleList = res.data;
      });
  }

}
