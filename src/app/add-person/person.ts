import { Component, OnInit } from '@angular/core';

export interface PersonInterface {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: {
    city?: string;
    street?: string;
    postCode?: string;
  };
}

export type Address = {
  city?: string;
  street?: string;
  postCode?: string;
};

@Component({
  template: '',
})
export class Person implements OnInit, PersonInterface {
  id?: number;
  firstName?: string;
  familyName?: string;
  age?: number;
  address: Address = {
    city: '',
    street: '',
    postCode: '',
  };
  constructor() {}

  ngOnInit() {}
}