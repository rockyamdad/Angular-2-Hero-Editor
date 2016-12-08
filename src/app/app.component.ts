import { Component } from '@angular/core';

export class Hero{

  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  template:`
  <h1>Welcome to {{title}}</h1>
  <h2>Detail {{name}}</h2>
  <div><label> id:</label>  {{id}}</div>
    <div><label>name:</label>
     <!--<input [(ngModel)] = 'hero.name' placeholder=' name'/>-->
     {{name}}
    </div>
    <h3>My Heroes</h3>
    <ul class="heroes">
        <li *ngFor="let hero of heroes" (click)="getInfo(hero)">
            <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
    </ul>
    
     <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero tour!';
  name = 'Heroes';
  id = '1';

  heroes: Hero[] = [
    {name:'Rocky',id:2, age:27},
    {name:'Umal',id:3, age:34},
    {name:'Samiul',id:4, age:22},
  ];

  selectedHero: Hero;

  getInfo(hero: Hero){
    this.selectedHero = hero;
  }
}
