import { Component, OnInit } from '@angular/core';
import{DataService} from './data.service';
@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor(private _dataService:DataService) { }

  ngOnInit() {
  }
newMessage(){
  this._dataService.changeMessage('hello from sibling');
}
}
