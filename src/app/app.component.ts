import { Component } from '@angular/core';
import  {Hero} from './Hero';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{hero.id}}</h1>`,
})
export class AppComponent
{
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
