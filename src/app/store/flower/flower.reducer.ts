import { Flower } from '../../model/flower';
import { Action } from '@ngrx/store';

import * as FlowerActions from './flower.actions';


export declare type FlowerState = Flower[];

const initialState: FlowerState = [
  {
    name: 'Margarita',
    color: 'white',
  }
];

export function flowerReducer(
  state: Flower[] = initialState,
  action: Action
) {
  const specificAction = action as FlowerActions.FlowerActions;

  switch (specificAction.type) {
    case FlowerActions.LOAD_FLOWER:
      return state;
    case FlowerActions.ADD_FLOWER:
      return [...state, specificAction.payload];
    case FlowerActions.REMOVE_FLOWER:
      let arr:Flower[] = state.filter((_, index) => index !== specificAction.payload)
      return arr;
    case FlowerActions.REMOVE_FLOWERS:
      return [];
    default:
      return state;
  }
}