import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ravi-history',
  templateUrl: './ravi-history.component.html',
  styleUrls: ['./ravi-history.component.css']
})
export class RaviHistoryComponent implements OnInit{
  ngOnInit(): void {
    this.http.get('http://localhost:8080/raviToRam').subscribe((response)=>{
      this.chat=response;
    })
    this.http.get('http://localhost:8080/raviToGopi').subscribe((response)=>{
      this.chat1=response;
    })
    this.http.get('http://localhost:8080/raviToGroup').subscribe((response)=>{
      this.chat2=response;
    })
  }
  chat:any;
  chat1:any;
  chat2:any
  constructor(private http:HttpClient){

  }

}
