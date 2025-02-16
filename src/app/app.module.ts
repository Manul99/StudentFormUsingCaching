import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentformModule } from './studentform/studentform.module';
import { StudentformMainformComponent } from './studentform/studentform-mainform/studentform-mainform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { StudentformForm1Component } from './studentform/studentform-form1/studentform-form1.component';
import { StudentformForm2Component } from './studentform/studentform-form2/studentform-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StudentformModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
