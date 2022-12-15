import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  firstName?: string;
  familyName?: string;
  age?: number;
  city?: string;
  street?: string;
  postCode?: string;
  person_service: PersonService = new PersonService();

  constructor(private router: Router) {}

  addPerson() {
    let newPerson: Person = new Person();
    newPerson.firstName = this.firstName;
    newPerson.familyName = this.familyName;
    newPerson.age = this.age;
    newPerson.address['city'] = this.city;
    newPerson.address['street'] = this.street;
    newPerson.address['postCode'] = this.postCode;
    this.person_service.saveLS(newPerson);
    this.router.navigate(['/list']);
  }

  ngOnInit() {}
}
