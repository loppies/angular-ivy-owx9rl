import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, AppRoutingModuleModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AppComponent,
    ListComponent,
    DetailsComponent,
    AddPersonComponent,
    NotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
