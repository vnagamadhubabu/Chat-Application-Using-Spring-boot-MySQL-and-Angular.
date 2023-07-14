import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private router:Router){

  }  

  login(username:String,password:String){
    if(username=="ram"&&password=="ram"){
      this.router.navigate(['/ram']);
    }else if(username=="ravi"&&password=="ravi") {
      this.router.navigate(['/ravi'])
    }else if (username=="gopi"&&password=="gopi"){
      this.router.navigate(['/gopi'])
    } else {
      alert("Invalid Username Password ")
    }
  }

}
