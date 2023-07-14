import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ram-chat',
  templateUrl: './ram-chat.component.html',
  styleUrls: ['./ram-chat.component.css']
})
export class RamChatComponent implements OnInit{
  
  start:Boolean=true;
  ra:Boolean=false;
  gop:Boolean=false;
  goup:Boolean=false;
  ravii:Boolean=true;
  gopii:Boolean=true;
  groupp:Boolean=true;
  chat:any;
  chat1:any;
  chat2:any;
  message:any;
  private intervalId: any;
  constructor(public http:HttpClient, private router:Router){

  }
  ngOnInit(): void {
    
    
    this.intervalId = setInterval(() => {
      this.initializeComponent();
    }, 2000);

   
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  initializeComponent(): void {
    this.http.get('http://localhost:8080/ramToRavi').subscribe((response)=>{
      this.chat=response;
    })
    this.http.get('http://localhost:8080/ramToGopi').subscribe((response)=>{
      this.chat1=response;
    })
    this.http.get('http://localhost:8080/ramToGroup').subscribe((response)=>{
      this.chat2=response;
    })
  }
  history(){
    this.router.navigate(['/ramHistory']);
  }
  back(){
    this.ravii=true;
    this.gopii=true;
    this.groupp=true;
    this.ra=false;
    this.gop=false;
    this.goup=false;
    this.start=true;
  }
  ravi(){
    this.ra=true;
    this.gop=false;
    this.goup=false;
    this.gopii=false;
    this.groupp=false;
    this.start=false;
    
  }
  sent(msg: any) {
    const url = `http://localhost:8080/ramToRavi/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/ramToRavi').subscribe((response)=>{
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
    this.ravii=false;
    this.groupp=false;
    this.start=false;
    
  }
  sent1(msg: any) {
    const url = `http://localhost:8080/ramToGopi/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/ramToGopi').subscribe((response)=>{
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
    this.ravii=false;
    this.gopii=false;
    this.start=false;
    
  }
  sent2(msg: any) {
    const url = `http://localhost:8080/ramToGroup/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/ramToGroup').subscribe((response)=>{
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
