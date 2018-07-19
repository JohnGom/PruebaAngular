import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material';
import { TemplateModule } from './template/template.module';

import { AppComponent } from './app.component';
import { ContactModalComponent } from './shared/contact-modal/contact-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactModalComponent,
    ContactModalComponent
  ],
  imports: [
    TemplateModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [
    ContactModalComponent
  ],
  entryComponents: [ 
    ContactModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
