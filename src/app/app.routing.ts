import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GradeComponent } from './grade/grade.component';
import { GradeListingComponent } from './grade/grade-listing.component';

const ROUTES:Routes=[
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'grade/add' , component:GradeComponent},
    {path:'grade/:id/edit' , component:GradeComponent},
    {path:'grade-listing' , component:GradeListingComponent},
    {path:'**' , redirectTo:''},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);