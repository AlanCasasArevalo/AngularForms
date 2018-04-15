import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
    email: 'test@gmail.com',
    // hobbies : ['Escuchar musica', 'Cocinar', 'Leer', 'Comer']
  };

  constructor() {

    // console.log(this.user);

    this.form = new FormGroup({
      'fullName' : new FormGroup({
        'name': new FormControl('', [ Validators.required, Validators.minLength(3) ]),
        'lastname': new FormControl('', [ Validators.required, this.noLastNameRepeated ])
      }),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'hobbies': new FormArray([
        new FormControl('Comer', Validators.required)
      ]),
      'password' : new FormControl('', Validators.required),
      'confirmPassword' : new FormControl(),

      // Assync validations
      'nickname' : new FormControl('', Validators.required, this.isUserIntoDataBase),
    });


    this.form.controls['confirmPassword'].setValidators([
      Validators.required,
      // when we put .bind( this.form ) we do the this object is form in all file
      this.confirmPasswords.bind( this.form )
    ]);

    // This just work IF and just IF your object properties and form properties are the same
    // this.form.setValue(this.user);

    this.form.controls['nickname'].valueChanges.subscribe( data => {
      console.log(data);
    });

    this.form.controls['nickname'].statusChanges.subscribe( data => {
      console.log(data);
    });

    // this.form.valueChanges.subscribe( data => {
    //   console.log(data);
    // });

  }

  addNewHobbie() {
    (<FormArray>this.form.controls['hobbies']).push(
      new FormControl('Leer', Validators.required)
    );
  }

  // This validations should be into apart file
  noLastNameRepeated( control: FormControl ): {[string: string]: boolean } {
    if (control.value === 'casas') {
      return {
        nocasas: true
      };
    }

    return null;

  }
  // This validations should be into apart file
  isUserIntoDataBase( control: FormControl ): Promise<any> | Observable<any> {

    const promise = new Promise( ( resolve, reject ) => {
      setTimeout(() => {
        if (control.value === 'Javito') {
          resolve( { exits : true} );
        } else {
          resolve( null );
        }
      }, 3000);
    });

    return promise;
  }

  // This validations should be into apart file
  confirmPasswords( control: FormControl ): {[string: string]: boolean } {

    const form: any = this;

    if (control.value !== form.controls['password'].value) {
      return {
        noTheSamePassword: true
      };
    }

    return null;

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
    //     'name': 'Alan',
    //     'lastname': 'Casas'
    //   },
    //   'email': 'test@gmail.com',
    //   'hobbies' : ''
    // });

  }

  ngOnInit() {
  }

}
