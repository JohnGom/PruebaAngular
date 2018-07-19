import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule, 
  MatInputModule, 
  MatButtonModule, 
  MatSelectModule, 
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatListModule,
  MatPaginatorModule } from '@angular/material';

import { NewPersonComponent } from './new-person/new-person.component';
import { AllPeopleComponent } from './all-people/all-people.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatTableModule
  ],
  declarations: [ NewPersonComponent, AllPeopleComponent ],
  exports: [ NewPersonComponent, AllPeopleComponent ]
})
export class PeopleModule { }
