import { Injectable } from '@angular/core';
import { Person } from '../Person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagePersonService {

  people: Person[];

  constructor() { 
    this.people = [
      { id: 123, name: 'John', lastname: 'Gomez', city: 'Medellin', gender: 'Masculino', 
        address: ['Cr 84 # 32-21'], phone: ['3245234', '2345234', '2345234']
      },
      { id: 124, name: 'Carlos', lastname: 'Perez', city: 'Bogota', gender: 'Femenino', 
        address: [], phone: []
      }
    ]
  }

  addPerson(person: Person) {
    this.people.push(person);
  }

  getPeople(): Observable<Person[]> {
    return of(this.people);
  }

}
