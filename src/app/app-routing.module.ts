import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllPeopleComponent } from './people/all-people/all-people.component';
import { NewPersonComponent } from './people/new-person/new-person.component';

const routes: Routes = [
  { path: '', redirectTo: '/newPerson', pathMatch: 'full' },
  { path: 'newPerson', component: NewPersonComponent },
  { path: 'people', component: AllPeopleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
