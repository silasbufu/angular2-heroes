import { Component } from '@angular/core';

export class Hero{
    id: number;
    name: String;
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>'
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero = Hero = {
        id: 1,
        name: 'Windstorm'
    };
}