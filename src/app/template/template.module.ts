import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PeopleModule } from '../people/people.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PeopleModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  declarations: [ HeaderComponent, FooterComponent, ContentComponent ],
  exports: [ HeaderComponent, FooterComponent, ContentComponent ]
})
export class TemplateModule { }
