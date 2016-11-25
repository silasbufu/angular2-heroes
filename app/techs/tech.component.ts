import {Component, Input} from '@angular/core';
import {Tech} from './techs.component';

@Component({
  moduleId: module.id,
  selector: 'fountain-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['tech.component.css']
})
export class TechComponent {
  @Input() public tech: Tech;
}
