import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  clients: Client = {
    talkTo: '',
    name: '',
    email: '',
    phone: '',
    subjectMatter: '',
    message: ''
  }
  
  constructor(private clientService: ClientService, private router: Router ) {
    
   }

  ngOnInit(): void {
  }

  createClient(): void{
    this.clientService.create(this.clients).subscribe(() =>{
      this.clientService.showMessage('Mensagem enviada!')
      this.router.navigate(['/contact'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contact'])
  }

}
