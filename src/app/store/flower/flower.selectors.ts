import { createFeatureSelector } from '@ngrx/store';
import { FlowerState }  from './flower.reducer';

export const getGeneralFlowerState = createFeatureSelector<FlowerState>('flower');


