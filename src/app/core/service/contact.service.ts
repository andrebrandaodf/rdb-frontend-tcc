
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Contact } from '../model/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactService{
    baseUrl= environment.baseUrl;

    constructor(private snackBar: MatSnackBar, private http: HttpClient){
        
    }

    showMessage(msg: string, isError: boolean = false): void{
        this.snackBar.open(msg, 'x' ,{
            duration: 3000,
            horizontalPosition:"right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-sucess'],
        });
    }

    create(contact: Contact): Observable<any>{
        return this.http.post(`${this.baseUrl}/contact`, contact,);
    }

    errorHandler(e: any): Observable<any>{
        this.showMessage("Ocorreu um erro: ", true);
        return EMPTY;
      }
}