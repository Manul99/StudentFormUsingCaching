import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentformModule } from './studentform/studentform.module';
import { StudentformMainformComponent } from './studentform/studentform-mainform/studentform-mainform.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentformMainformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
