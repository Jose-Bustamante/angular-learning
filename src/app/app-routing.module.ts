import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckService } from './service/chuck.service';
import { FlowerService } from './service/flower.service';

const routes: Routes = [
  {path: 'flowers', loadChildren: () => import('./flowers/flowers.module').then(m => m.FlowersModule)},
  {path: 'trees', loadChildren: () => import('./trees/trees.module').then(m => m.TreesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ChuckService, FlowerService],
})
export class AppRoutingModule { }
