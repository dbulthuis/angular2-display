import {Component} from 'angular2/core';
import {ClickMeComponent} from './click-me.component';
import {KeyUpComponent_v1} from './keyup.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ClickMeComponent,KeyUpComponent_v1],
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[2];
}

