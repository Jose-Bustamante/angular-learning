import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { PlantsState } from './flower/flower-store';
import { flowerReducer } from './flower/flower.reducer';
import { NgModule } from '@angular/core';

export const plantsReducer: ActionReducerMap<PlantsState> = {
  flowers: flowerReducer
};

@NgModule({
  imports: [StoreModule.forFeature('plants', plantsReducer)]
})
export class PlantsStoreModule {}