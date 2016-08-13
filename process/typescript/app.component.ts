import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
 // template: '<h1>Welcome to Angualr 2</h1>  '
  templateUrl:'views/app.component.html'
})

export class AppComponent {
  Message:string= "Angular2"

}
