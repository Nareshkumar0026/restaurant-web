import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-search',
  templateUrl: './error-search.component.html',
  styleUrls: ['./error-search.component.css']
})
export class ErrorSearchComponent {

@Input()  visible:boolean= false;
@Input()   notfoundmessage: string = "!!Nothing Found at a moment!!";
@Input()   resetlinktext: string ="Reset";
@Input()   resetlinkroute: string ="/menu";

}
