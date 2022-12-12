import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class ApirestService {
 listado = []; 
 item : any; 
 private urlApi = 'https://jsonplaceholder.typicode.com/'; //url de la api
  constructor( private httpClient : HttpClient) { }

  // traer a todos los usuario 
  getUsers()
  {
    // definir url para solicitud
    let url = this.urlApi + "users";
    this.listado =[]; 
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: []) => {
        resolve(data);
        data.forEach(item => {this.listado.push(item);})
      },
      error => 
      {
        console.log("Errror en la comunicación del server");
      });
    });
  }

  async getUser(id )
  {
    let url = this.urlApi + 'posts/' + id ;
    this.listado = []; 
    return new Promise((resolve, reject) => 
    {
      this.httpClient.get(url).subscribe((data: any) =>
      {
        resolve(data);
        this.item = data;
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }
  // metodo de post 

  getUserp() {
    return new Promise(resolve=>{
      this.httpClient.get(this.urlApi).subscribe(data=>{
        resolve(data);
      },error =>{
        console.log(error);
      });
    })  ;
  }


}
