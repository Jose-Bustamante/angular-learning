import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlowersRoutingModule } from './flowers-routing.module';
import { FlowerListComponent } from './flower-list/flower-list.component';


@NgModule({
  declarations: [FlowerListComponent],
  imports: [
    CommonModule,
    FlowersRoutingModule,
    FormsModule
  ]
})
export class FlowersModule { }
