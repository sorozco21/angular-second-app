import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/Role';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  constructor(private http: HttpClient) { }

  getAllDesignation() : Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+'GetAllDesignation');
  }
}
