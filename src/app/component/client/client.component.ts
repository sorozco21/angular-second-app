import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Class';
import { FormsModule, NgForm } from '@angular/forms';
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

  onSubmit(form : NgForm) {
    
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
    });
    if (form.valid) {
      console.log('Form Submitted:', this.client);
      this.resetForm(form);
    }
  }

  resetForm(form : NgForm){
    form.reset();
    this.client=new Client();
  }
}
