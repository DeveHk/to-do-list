import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'howdy';
  constructor(){
    setTimeout(() => {
      this.title = 'holaa'
    }, 1000);
  }
}
