import { Component, OnInit, HostListener } from '@angular/core';
import { ContactService } from '../../core/service/contact.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {ContactEnum } from 'src/app/core/enums/contact-enum.enum'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  innerWidth: number = 0;
  talks: string[]= [];

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

  optionsContact = [
    {value: 'CHEERS', valueView: 'Elogios'},
    {value: 'SUGGESTIONS', valueView: 'Sugestões e Críticas'},
    {value: 'DOUBT', valueView: 'Dúvidas produtos Hipolabor'},
    {value: 'TECHNICALCOMPLAINTS', valueView: 'Reclamações técnicas produtos Hipolabor'},
    {value: 'COMMERCIALCOMPLAINTS', valueView: 'Reclamações comerciais'},
    {value: 'OPPORTUNITIES', valueView: 'Oportunidades de emprego Hipolabor'},
    {value: 'PASSWORD', valueView: 'Senha profissional de saúde'},
    {value: 'EVENT', valueView: 'Evento adverso'},
  ]


  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.innerWidth = window.innerWidth;

  }

  ngOnInit(): void {
  }

  createContact(): void {
    this.contactService.create(this.formContact.value).subscribe(() => {
      this.contactService.showMessage('Mensagem enviada!')
      this.router.navigate(['/contact'])
    })
    // console.log(this.formContact.value)
  }

  cancel(): void {
    this.router.navigate(['/contact'])
  }

}
