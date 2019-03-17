import { Component,ViewChild,AfterViewInit,OnInit} from '@angular/core';
import{ChildComponent} from './child.component';
import{DataService} from './data.service';

@Component({
  selector: 'parentToChild',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit,OnInit{
  parentMessage = "message from parent";
  message:string;
  messageEventEmitted:string;
  messageFromSibling:string;

  @ViewChild(ChildComponent) child;
  constructor(private _dataService:DataService) { }

  ngOnInit(){
    this._dataService.currentMessage.subscribe((message)=>{
this.messageFromSibling=message;
    })
  }
  ngAfterViewInit() {
this.message=this.child.message;
  }

  receiveMessage($event) {
    this.messageEventEmitted = $event
  }

}
