import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RamChatComponent } from './ram-chat/ram-chat.component';
import { RaviChatComponent } from './ravi-chat/ravi-chat.component';
import { GopiChatComponent } from './gopi-chat/gopi-chat.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RaviHistoryComponent } from './ravi-history/ravi-history.component';
import { RamHistoryComponent } from './ram-history/ram-history.component';
import { GopiHistoryComponent } from './gopi-history/gopi-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RamChatComponent,
    RaviChatComponent,
    GopiChatComponent,
    LoginComponent,
    RaviHistoryComponent,
    RamHistoryComponent,
    GopiHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GopiChatComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
