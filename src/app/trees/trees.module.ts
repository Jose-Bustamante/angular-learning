import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreesRoutingModule } from './trees-routing.module';
import { TreeListComponent } from './tree-list/tree-list.component';
import { TreeComponent } from './tree-list/tree/tree.component';


@NgModule({
  declarations: [TreeListComponent, TreeComponent],
  imports: [
    CommonModule,
    TreesRoutingModule
  ]
})
export class TreesModule { }
