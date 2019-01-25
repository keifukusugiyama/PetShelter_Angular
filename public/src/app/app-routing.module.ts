import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsComponent } from './pets/pets.component';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { OneComponent } from './one/one.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pets'},
  { path: 'pets', component: PetsComponent, children: [
    { path: '', component: AllComponent },
    { path: 'new', component: NewComponent },
    { path: ':id', component: OneComponent },
    { path: 'edit/:id', component: EditComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
