import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  saveLS(person: Person) {
    person.id = localStorage.length - 1;
    window.localStorage.setItem(
      `${localStorage.length - 1}`,
      JSON.stringify(person)
    );
  }

  getLS() {
    let people: Array<Person> = [];
    for (let i = 0; i < window.localStorage.length - 1; i++) {
      if (window.localStorage[i] != undefined)
        people.push(JSON.parse(window.localStorage[i]));
    }
    return people;
    // JSON.parse()
  }

  deleteLS(index: number) {
    localStorage.removeItem(`${index}`);
  }

  getelement(index: number) {
    let person: string = localStorage.getItem(`${index}`);
    return JSON.parse(person);
  }
}
