import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-gopi-chat',
  templateUrl: './gopi-chat.component.html',
  styleUrls: ['./gopi-chat.component.css']
})
export class GopiChatComponent implements OnInit{
  message: any;
  private intervalId: any;
  ngOnInit(): void {
    
   

    this.intervalId = setInterval(() => {
      this.initializeComponent();
    }, 2000);
    
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  initializeComponent(): void {
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
  start:Boolean=true;
  ra:Boolean=false;
  gop:Boolean=false;
  goup:Boolean=false;
  ramm:Boolean=true;
  ravii:Boolean=true;
  groupp:Boolean=true;
  chat:any;
  chat1:any;
  chat2:any;
  constructor(public http:HttpClient, private router:Router,private TestService:TestService){

  }
  history(){
    this.router.navigate(['/gopiHistory']);
  }

  back(){
    this.ramm=true;
    this.ravii=true;
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
    this.ravii=false;
    this.groupp=false;
    this.start=false;
  }
  sent(msg: any) {
    const url = `http://localhost:8080/gopiToRam/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/gopiToRam').subscribe((response)=>{
        this.chat=response;
        this.message='';
        
        
    })

    },
      (error) => {

        console.error('Failed to send message:', error);
      }
    );
  }
  
  ravi(){
    this.ra=false;
    this.gop=true;
    this.goup=false;
    this.ramm=false;
    this.groupp=false;
    this.start=false;
  }
  sent1(msg: any) {
    const url = `http://localhost:8080/gopiToRavi/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/gopiToRavi').subscribe((response)=>{
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
    this.ravii=false;
    this.start=false;
  }
  sent2(msg: any) {
    const url = `http://localhost:8080/gopiToGroup/${msg}`; // Assuming the backend endpoint is correct
  
    this.http.post(url, {}).subscribe(
      () => {

        console.log('Message sent successfully');
        this.http.get('http://localhost:8080/gopiToGroup').subscribe((response)=>{
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
