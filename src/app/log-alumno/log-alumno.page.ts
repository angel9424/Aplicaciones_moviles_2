import { Component, OnInit } from '@angular/core';
import { FormGroup,
        FormControl,
        Validators,
        FormBuilder
 } from '@angular/forms';

@Component({
  selector: 'app-log-alumno',
  templateUrl: './log-alumno.page.html',
  styleUrls: ['./log-alumno.page.scss'],
})
export class LogAlumnoPage implements OnInit {

  formularioLogin: FormGroup;

  constructor( public fb: FormBuilder) { 
    
    this.formularioLogin = this. fb.group ({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

}
