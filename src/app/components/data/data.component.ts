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

    // This just work IF and just IF your object properties and form properties are the same
    this.form.setValue(this.user);

  }

  saveData() {
    console.log('El usuario es:');
    console.log(this.form.value);

    console.log('El formulario es:');
    console.log(this.form);

    // This reset the form but with user default values
    this.form.reset(this.user);

    // This reset the form but without any values
    // this.form.reset({
    //   'fullName' : {
    //     'name': '',
    //     'lastname': ''
    //   },
    //   'email': ''
    // });

  }

  ngOnInit() {
  }

}
