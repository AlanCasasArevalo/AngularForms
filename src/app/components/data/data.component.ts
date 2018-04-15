import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  form: FormGroup;

  user: Object = {
    fullName : {
      name: 'Alan',
      lastname: 'Casas'
    },
    email: 'test@gmail.com'
  };

  constructor() {

    // console.log(this.user);

    this.form = new FormGroup({

      'fullName' : new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'lastname': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  saveData() {
    console.log('El usuario es:');
    console.log(this.form.value);

    console.log('El formulario es:');
    console.log(this.form);
  }

  ngOnInit() {
  }

}
