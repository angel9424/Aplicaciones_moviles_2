import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { UsuariosPage } from '../usuarios/usuarios.page';
import { domainToASCII } from 'url';



@Component({
  selector: 'app-log-alumno',
  templateUrl: './log-alumno.page.html',
  styleUrls: ['./log-alumno.page.scss'],
})
export class LogAlumnoPage  {


  constructor(private router:Router,
              private crud: CrudService,
              private toast: ToastController) { }

  async agregar (txtUsuario:HTMLInputElement, txtPassword:HTMLInputElement)
   {

    //validar

    if(txtUsuario.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'Especifique el usuario',
        duration: 2000,
        color: "danger",
        position: "middle"
      });
      toast.present(); 
      return;

    }
     else if(txtPassword.value.trim().length != 1234 )
    {
      const toast = await this.toast.create({
        message: 'Contraseña incorrecta o invalida intente con: 1234',
        duration: 2000,
        color: "danger",
        position: "middle"
      });
      toast.present(); 
      return; 
    }
    else if(txtPassword.value.trim().length == 0 )
    {
      const toast = await this.toast.create({
        message: 'Contraseña incorrecta o invalida intente con: 1234',
        duration: 2000,
        color: "danger",
        position: "middle"
      });
      toast.present(); 
      return; 
    }
    
    
    const datos = [{"usuario" : txtUsuario.value,
                    "password": txtPassword.value
                  }];
    await this.crud.agregar(txtUsuario.value, datos); //agregar datos 
    const toast = await this.toast.create({
      message: 'Usuario creado',
      duration: 2000,
      color: "succes",
      position: "middle"
    });
    toast.present(); 
    
    // limpiar cajas de texto
    txtUsuario.value = "";
    txtPassword.value = "";
   }

  // async siguiente(txtUsuario: HTMLInputElement, txtPassword:HTMLInputElement)
  // {
    
  //   if(txtPassword.value.trim().length != 1234)
  //   {
  //     const toast = await this.toast.create({
  //       message: 'Clave invalida',
  //       duration: 2000,
  //       color: "danger",
  //       position: "middle"
  //     });
  //     toast.present(); 
  //     return;
  //   }
  //   else if(txtPassword.value.trim().length == 0 )
  //   {
  //     const toast = await this.toast.create({
  //       message: 'Contraseña incorrecta o invalida intente con: 1234',
  //       duration: 2000,
  //       color: "danger",
  //       position: "middle"
  //     });
  //     toast.present(); 
  //     return; 
  //   }
  //   else (txtPassword.value.trim().length == 1234 )
  //   {
  //     this.router.navigate(['/usuarios']);
  //   };  

  // }
  
}