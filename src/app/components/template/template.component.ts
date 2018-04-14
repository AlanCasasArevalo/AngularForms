import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  defaultUser: Object = {
    name : 'Alan',
    lastname: 'Casas',
    email: 'test@test.com'
  };

  constructor() { }

  saveData( form: NgForm ) {
    console.log('Valores');
    console.log(form.value);

    console.log('Default User');
    console.log( this.defaultUser );
  }

}
