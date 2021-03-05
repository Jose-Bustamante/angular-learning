import { createAction, props } from '@ngrx/store';

export const loadChampions = createAction(
  '[Champion] Load Champions'
);

export const loadChampionsSuccess = createAction(
  '[Champion] Load Champions Success',
  props<{ data: any }>()
);

export const loadChampionsFailure = createAction(
  '[Champion] Load Champions Failure',
  props<{ error: any }>()
);
