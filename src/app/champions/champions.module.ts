import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsRoutingModule } from './champions-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ChampionEffects } from '../store/champions/champion.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChampionsRoutingModule,
    EffectsModule.forFeature([ChampionEffects])
  ]
})
export class ChampionsModule { }
