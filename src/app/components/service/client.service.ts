
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

    create(clients: Client){
        let headers = new HttpHeaders({
            "Content-Type":  "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOnsiX2lkIjoiNjA5OTY0MmI5MGFjYjMwM2I4YjFkMjYyIiwibmFtZSI6ImhpcG9sYWJvciIsInBhc3N3b3JkIjoiJDJiJDEwJHhXRWxaM3N5THoyd2NELndXa015Qk9hZzhVRy9oSXJQUmZYOEJFTi42bzNxTTRWSFdQR0VDIiwid2Vic2l0ZV91cmwiOiJodHRwczovL3d3dy5oaXBvbGFib3IuY29tLmJyIiwiZW1haWwiOiJoaXBvbGFib3JAaGlwb2xhYm9yLmNvbS5iciIsInRlbXBsYXRlIjoiaGlwb2xhYm9yIiwiX192IjowfSwiaWF0IjoxNjIwNjY1NDMzLCJleHAiOjE2MzUwNjU0MzN9.ssH8b2CMShCxpdIrxFQBkKDdnYkhE6_uWnGTlUv4cw8",
            "Client": 'https://www.hipolabor.com.br'
          });
        let httpOptions = {
            headers: headers
          };
        return this.http.post(`${this.baseUrl}/mail`, clients, httpOptions);
    }

    errorHandler(e: any): Observable<any>{
        this.showMessage("Ocorreu um erro: ", true);
        return EMPTY;
      }
}