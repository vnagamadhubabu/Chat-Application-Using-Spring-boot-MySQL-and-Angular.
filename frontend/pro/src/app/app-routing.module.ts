import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamChatComponent } from './ram-chat/ram-chat.component';
import { RaviChatComponent } from './ravi-chat/ravi-chat.component';
import { GopiChatComponent } from './gopi-chat/gopi-chat.component';
import { LoginComponent } from './login/login.component';
import { RaviHistoryComponent } from './ravi-history/ravi-history.component';
import { RamHistoryComponent } from './ram-history/ram-history.component';
import { GopiHistoryComponent } from './gopi-history/gopi-history.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'ram',component:RamChatComponent},
  {path:'ravi',component:RaviChatComponent},
  {path:'gopi',component:GopiChatComponent},
  {path:'raviHistory',component:RaviHistoryComponent},
  {path:'ramHistory',component:RamHistoryComponent},
  {path:'gopiHistory',component:GopiHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
