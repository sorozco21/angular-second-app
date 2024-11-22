import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Class';
import { environment } from '../../environments/environment';
import { APIResponseModel } from '../model/interface/Role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + 'GetAllClients')
  }

  addUpdateClient(client: Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + 'AddUpdateClient', client)
  }

  deleteClientById(id: number) : Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+'DeleteClientByClientId?clientId='+id )
  }
}
