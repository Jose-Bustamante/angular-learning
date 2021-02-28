import { Action } from '@ngrx/store';
import { Flower } from '../../model/flower';

export const LOAD_FLOWER = '[FLOWER] Load';
export const ADD_FLOWER = '[FLOWER] Add Flower';
export const REMOVE_FLOWER = '[FLOWER] Remove Flower';
export const REMOVE_FLOWERS = '[FLOWER] Remove All Flowers';

export class LoadFlower implements Action {
  readonly type = LOAD_FLOWER;
}
export class AddFlower implements Action {
  readonly type = ADD_FLOWER;
  constructor(public payload: Flower) {}
}
export class RemoveFlower implements Action {
  readonly type = REMOVE_FLOWER;
  constructor(public payload?: number) {}
}
export class RemoveFlowers implements Action {
  readonly type = REMOVE_FLOWERS;
}

export type FlowerActions =
  | LoadFlower
  | AddFlower
  | RemoveFlower

