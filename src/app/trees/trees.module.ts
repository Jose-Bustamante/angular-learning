import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreesRoutingModule } from './trees-routing.module';
import { TreeListComponent } from './tree-list/tree-list.component';


@NgModule({
  declarations: [TreeListComponent],
  imports: [
    CommonModule,
    TreesRoutingModule
  ]
})
export class TreesModule { }
