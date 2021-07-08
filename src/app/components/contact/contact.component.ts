import { Component, OnInit, HostListener } from '@angular/core';
import { Client } from '../../core/model/client.model';
import { ClientService } from '../../core/service/client.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  innerWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  formContact = this.fb.group({
    talkTo: [null, [Validators.required]],
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null],
    subjectMatter: [null],
    message: [null, [Validators.required]],
  })

  // optionsContact = [
  //   {id: 1, valueView: 'Elogios', email: 'sac@hipolabor.com.br'},
  //   {id: 2, valueView: 'Sugestões e Críticas', email: 'sac@hipolabor.com.br'},
  //   {id: 3, valueView: 'Dúvidas produtos Hipolabor', email: 'sac@hipolabor.com.br'},
  //   {id: 4, valueView: 'Reclamações técnicas produtos Hipolabor', email: 'sac@hipolabor.com.br'},
  //   {id: 5, valueView: 'Reclamações comerciais', email: 'sac@hipolabor.com.br'},
  //   {id: 6, valueView: 'Oportunidades de emprego Hipolabor', email: 'rh@hipolabor.com.br'},
  //   {id: 7, valueView: 'Senha profissional de saúde', email: 'marketing@hipolabor.com.br'},
  //   {id: 8, valueView: 'Evento adverso', email: 'sac@hipolabor.com.br'},
  // ]

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

  createClient(): void {
    this.clientService.create(this.formContact.value).subscribe(() => {
      this.clientService.showMessage('Mensagem enviada!')
      this.router.navigate(['/contact'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contact'])
  }

}
