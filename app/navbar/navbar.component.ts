import { Component, OnInit} from '@angular/core';

import { ROUTES } from './navbar-route.config'


@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit{
    menuItems: any[];
    project: {};
    ngOnInit(){
        this.menuItems = ROUTES;
        this.project = ROUTES[0];    
    }   
}