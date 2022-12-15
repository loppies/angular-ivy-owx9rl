import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../add-person/person.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  name?: string;
  age?: number;
  city?: string;
  street?: string;
  zipCode?: string;
  personService: PersonService = new PersonService();
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let person: JSON = this.personService.getelement(
        params['id']
      );
      this.loadPersonOnSite(person);
    });
  }

  loadPersonOnSite(person) {
    this.name = person.firstName + ' ' + person.familyName;
    this.age = person.age;
    this.city = person.address['city'];
    this.street = person.address['street'];
    this.zipCode = person.address['postCode'];
  }

  public goHome() {
    this.router.navigate(['/details', 2]);
  }
}
