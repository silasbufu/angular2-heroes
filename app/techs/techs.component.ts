import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export class Tech {
  constructor(
    public logo: string,
    public title: string,
    public text1: string,
    public text2: string
  ) {}
}

@Component({
  moduleId: module.id,
  selector: 'fountain-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['techs.component.css']
})
export class TechsComponent {
  public techs: Tech[];
  public tech: Tech;

  constructor(public http: Http) {
    this.getTechs().subscribe(result => this.techs = result);
  }

  getTechs(): Observable<Tech[]> {
    return this.http
      .get('app/techs/techs.json')
      .map(response => response.json());
  }
}
