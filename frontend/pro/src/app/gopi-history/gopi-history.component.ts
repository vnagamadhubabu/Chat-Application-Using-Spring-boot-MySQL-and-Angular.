import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gopi-history',
  templateUrl: './gopi-history.component.html',
  styleUrls: ['./gopi-history.component.css']
})
export class GopiHistoryComponent implements OnInit{
  ngOnInit(): void {
    this.http.get('http://localhost:8080/gopiToRam').subscribe((response)=>{
      this.chat=response;
    })
    this.http.get('http://localhost:8080/gopiToRavi').subscribe((response)=>{
      this.chat1=response;
    })
    this.http.get('http://localhost:8080/gopiToGroup').subscribe((response)=>{
      this.chat2=response;
    })
  }
  constructor(private http:HttpClient){

  }
  chat:any;
  chat1:any;
  chat2:any;

}
