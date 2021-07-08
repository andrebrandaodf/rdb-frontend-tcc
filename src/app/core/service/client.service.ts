
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Client } from '../model/client.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class ClientService{
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

    create(clients: Client): Observable<any>{
        return this.http.post(`${this.baseUrl}/contact`, clients,);
    }

    errorHandler(e: any): Observable<any>{
        this.showMessage("Ocorreu um erro: ", true);
        return EMPTY;
      }
}