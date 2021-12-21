import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycleHooks';
  show: boolean = true;
  name:string = "Emanuel"
  randomName: string = "RandomName"


  changeName(){
    this.name = this.randomName;
    this.randomName = `RandomName${Math.floor(Math.random() * 10)}`
  }
}
