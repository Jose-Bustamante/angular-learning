import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { PlantsState } from './flower/flower-store';
import { flowerReducer } from './flower/flower.reducer';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FlowerEffects } from './flower/flower.effect';

export const plantsReducer: ActionReducerMap<PlantsState> = {
  flowers: flowerReducer
};

export const plantsEffects = [FlowerEffects]
@NgModule({
  imports: [
    EffectsModule.forFeature(plantsEffects),
    StoreModule.forFeature('plants', plantsReducer)
  ]
})
export class PlantsStoreModule {}