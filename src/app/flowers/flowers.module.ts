import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowersRoutingModule } from './flowers-routing.module';
import { FlowerListComponent } from './flower-list/flower-list.component';


@NgModule({
  declarations: [FlowerListComponent],
  imports: [
    CommonModule,
    FlowersRoutingModule
  ]
})
export class FlowersModule { }
