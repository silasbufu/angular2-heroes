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
    ngOnInit(){
        this.menuItems = ROUTES;    
    }   
}