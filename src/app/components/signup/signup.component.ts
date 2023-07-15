import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 public username:string;
 public userpassword: string;
 
 constructor(){
  this.username="";
  this.userpassword='';
  
 }

 public sign(){
  alert(this.username +"  PLETHORA Welcomes You !!!");
 }

 Onsubmit(signform:NgForm){
  console.log(signform.value);
  alert("!!! Signed in Successfully !!!")
 }
}
