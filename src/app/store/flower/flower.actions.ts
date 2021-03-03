import { Action } from '@ngrx/store';
import { Flower } from '../../model/flower';

export enum FlowerActionTypes {
  LoadFlower = '[FLOWER] Load',
  LoadFlowers = '[FLOWER] Load Flowers API',
  AddFlower = '[FLOWER] Add Flower',
  AddFlowerSuccess = '[FLOWER] Add Flower Success',
  AddFlowerFailure = '[FLOWER] Add Flower Failure',
  RemoveFlower = '[FLOWER] Remove Flower',
  RemoveFlowers = '[FLOWER] Remove All Flowers',
}

// export const LOAD_FLOWER = '[FLOWER] Load';
// export const ADD_FLOWER = '[FLOWER] Add Flower';
// export const REMOVE_FLOWER = '[FLOWER] Remove Flower';
// export const REMOVE_FLOWERS = '[FLOWER] Remove All Flowers';

export class LoadFlower implements Action {
  readonly type = FlowerActionTypes.LoadFlower;
}
export class LoadFlowers implements Action {
  readonly type = FlowerActionTypes.LoadFlowers;
}
export class AddFlower implements Action {
  readonly type = FlowerActionTypes.AddFlower;
  constructor(public payload:Flower) {}
}
export class AddFlowerSuccess implements Action {
  readonly type = FlowerActionTypes.AddFlowerSuccess;
  constructor(public payload: { flowers: Flower[] }) {}
}
export class AddFlowerFailure implements Action {
  readonly type = FlowerActionTypes.AddFlowerFailure;
  constructor(public payload:any) {}
}
export class RemoveFlower implements Action {
  readonly type = FlowerActionTypes.RemoveFlower;
  constructor(public payload:Flower) {}
}
export class RemoveFlowers implements Action {
  readonly type = FlowerActionTypes.RemoveFlowers;
}

export type FlowerActions =
  LoadFlower
  | LoadFlowers
  | AddFlower
  | AddFlowerFailure
  | AddFlowerSuccess
  | RemoveFlower
  | RemoveFlowers;


