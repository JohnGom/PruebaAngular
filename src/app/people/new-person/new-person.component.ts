import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ManagePersonService } from '../service/manage-person.service';
import { Person } from '../Person';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  PersonForm: FormGroup;
  person: Person;
  groupAddress: Array<string> = [];
  groupPhone: Array<string> = [];


  constructor(private personService: ManagePersonService,
              private router: Router) {

   }

  ngOnInit() {
    this.PersonForm = new FormGroup ({
      'identification': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'address': new FormControl(''),
      'phone': new FormControl(''),
    });
  }

  get identification() { return this.PersonForm.get('identification'); }
  get name() { return this.PersonForm.get('name'); }
  get lastname() { return this.PersonForm.get('lastname'); }
  get city() { return this.PersonForm.get('city'); }
  get gender() { return this.PersonForm.get('gender'); }
  get address1() { return this.PersonForm.get('address'); }
  get phone1() { return this.PersonForm.get('phone'); }

  saveFormPerson() {
    this.person = { 
      id: this.PersonForm.value.identification,
      name: this.PersonForm.value.name,
      lastname: this.PersonForm.value.lastname,
      city: this.PersonForm.value.city,
      gender: this.PersonForm.value.gender,
      address: this.groupAddress,
      phone: this.groupPhone,
    }
    this.personService.addPerson(this.person);
    this.router.navigate(['/people']);
  }

  addNewAddress() {
    this.groupAddress.push(this.PersonForm.value.address);
    this.PersonForm.patchValue({ address: '' });
  }

  addNewPhone() {
    this.groupPhone.push(this.PersonForm.value.phone);
    this.PersonForm.patchValue({ phone: '' });
  }

  deleteAddressOfGroup(index: number) {
    this.groupAddress.splice(index, 1)
  }

  deletePhoneOfGroup(index: number) {
    this.groupPhone.splice(index, 1)
  }

  

  prueba() {
    let sym = Symbol();
    console.log(sym);  
    //let a = prueba2();
  }

}

function prueba2(){
  var a = 5;
  var b = 10; 
  if (a === 5) { 
    let a = 4; 
    // El alcance es dentro del bloque if 
    var b = 1; // El alcance es global 
    console.log(a); // 4 
    console.log(b); // 1 
  } 

    console.log(a); // 5 
    console.log(b); // 1
}
