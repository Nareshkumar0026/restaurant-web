import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators, FormControl}from '@angular/forms'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {



  constructor(){
  
  }

  booking= new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(4)]),
    phone:new FormControl(),
    email:new FormControl(),
    date:new FormControl(),
    time:new FormControl(),
    option:new FormControl()
  })


  get username(){
    return this.booking.get('username');
  }

  get phone(){
    return this.booking.get('phone');
  }
    
  get email(){
    return this.booking.get('email');
  }

  onsubmit()
  {
    alert("!! Table Reserved !!");
    console.log(this.booking.value);
  }
}
