import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Class';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{
  

  client: Client = new Client()
  clientList: Client[]=[]
  clientService = inject(ClientService);
  isLoader: boolean = true;

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clientService.getAllClients().subscribe({
      next: (res) =>{
        this.clientList = res.data;
        this.isLoader = false
      },
      error: (e) => { console.log(e); alert(e); this.isLoader=false;}
    });
  }

  onSubmit() {
    debugger;
    this.clientService.addUpdateClient(this.client).subscribe({
      next: (res) =>{
        if(res.result){
          this.client = new Client();
          alert("Creating Client successful.")
          
        }else{
          alert(res.message);
        }
      },
      error: (e) => { console.log(e); alert(e); }
    });;
  }
}
