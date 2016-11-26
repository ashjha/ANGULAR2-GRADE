import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GradeComponent } from './grade/grade.component';
import { GradeListingComponent } from './grade/grade-listing.component';
import { HomeComponent } from './home/home.component';

import {GradeService} from './services/grade.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GradeComponent,
    GradeListingComponent,
    HomeComponent,
    GradeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [GradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
