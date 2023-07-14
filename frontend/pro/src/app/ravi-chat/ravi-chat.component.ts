import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ravi-chat',
  templateUrl: './ravi-chat.component.html',
  styleUrls: ['./ravi-chat.component.css']
})
export class RaviChatComponent implements OnInit{
  ngOnInit(): void {

    

    this.intervalId = setInterval(() => {
      this.initializeComponent();
    }, 2000);
    
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  initializeComponent(): void {
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
  start:Boolean=true;
  ra:Boolean=false;
  gop:Boolean=false;
  goup:Boolean=false;
  ramm:Boolean=true;
  gopii:Boolean=true;
  groupp:Boolean=true;
  chat:any;
  chat1:any;
  chat2:any;
  message:any;
  private intervalId: any;
  constructor(public http:HttpClient, private router:Router){

  }
  history(){
    this.router.navigate(['/raviHistory']);
  }

  back(){
    this.ramm=true;
    this.gopii=true;
    this.groupp=true;
    this.ra=false;
    this.gop=false;
    this.goup=false;
    this.start=true;
  }
  ram(){
    this.ra=true;
    this.gop=false;
    this.goup=false;
    this.gopii=false;
    this.groupp=false;
    this.start=false;
  }
  sent(msg: any) {
    const url = `http://localhost:8080/raviToRam/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/raviToRam').subscribe((response)=>{
        this.chat=response;
        this.message='';
        
    })

    },
      (error) => {

        console.error('Failed to send message:', error);
      }
    );
  }
  
  gopi(){
    this.ra=false;
    this.gop=true;
    this.goup=false;
    this.ramm=false;
    this.groupp=false;
    this.start=false;
  }
  sent1(msg: any) {
    const url = `http://localhost:8080/raviToGopi/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/raviToGopi').subscribe((response)=>{
        this.chat1=response;
        this.message='';
        
        
    })

    },
      (error) => {

        console.error('Failed to send message:', error);
      }
    );
  }
  group(){
    this.ra=false;
    this.gop=false;
    this.goup=true;
    this.ramm=false;
    this.gopii=false;
    this.start=false;
  }
  sent2(msg: any) {
    const url = `http://localhost:8080/raviToGroup/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/raviToGroup').subscribe((response)=>{
        this.chat2=response;
        this.message='';
        
    })

    },
      (error) => {

        console.error('Failed to send message:', error);
      }
    );
  }

}
