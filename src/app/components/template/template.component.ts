import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  defaultUser: Object = {
    name : null,
    lastname: null,
    email: null,
    country: '',
    gender: 'Hombre'
  };

  countries = [{
      code: 'CRI',
      name: 'Costa Rica'
    }, {
      code: 'ES',
      name: 'España'
    }, {
      code: 'US',
      name: 'Estados Unidos'
    }, {
      code: 'UK',
      name: 'Reino Unido'
    }, {
      code: 'COL',
      name: 'Colombia'
    }, {
      code: 'FR',
      name: 'Francia'
    }
];

  constructor() { }

  saveData( form: NgForm ) {
    console.log('Valores');
    console.log(form);

    console.log('Default User');
    console.log( this.defaultUser );
  }

}
