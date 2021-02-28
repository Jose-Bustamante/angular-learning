import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerListComponent } from './flower-list/flower-list.component';

const routes: Routes = [
  { path: '', component: FlowerListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersRoutingModule { }
