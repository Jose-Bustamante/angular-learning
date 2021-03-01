import { createFeatureSelector } from '@ngrx/store';
import { FlowersState } from './flower.reducer';
export interface PlantsState {
  flowers: FlowersState;
}

export const getPlantsState = createFeatureSelector<PlantsState>('plants');
