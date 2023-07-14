import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ram-history',
  templateUrl: './ram-history.component.html',
  styleUrls: ['./ram-history.component.css']
})
export class RamHistoryComponent implements OnInit{
  ngOnInit(): void {
    this.http.get('http://localhost:8080/ramToRavi').subscribe((response)=>{
      this.chat=response;
    })
    this.http.get('http://localhost:8080/ramToGopi').subscribe((response)=>{
      this.chat1=response;
    })
    this.http.get('http://localhost:8080/ramToGroup').subscribe((response)=>{
      this.chat2=response;
    })
  };
  chat:any;
  chat1:any;
  chat2:any;
  constructor(private http:HttpClient){

  }

}
