import { Flower } from '../../model/flower';
import { Action } from '@ngrx/store';

import * as FlowerActions from './flower.actions';


export declare type FlowerState = Flower[];

const initialState: FlowerState = [
  {
    name: 'Initial Flower',
    color: 'Blue'
  }
];

export function flowerReducer(
  state: Flower[] = initialState,
  action: FlowerActions.FlowerActions
) {
  switch (action.type) {
    case FlowerActions.LOAD_FLOWER:
      return state;
    case FlowerActions.ADD_FLOWER:
      return [...state, action.payload];
    case FlowerActions.REMOVE_FLOWER:
      state.splice(action.payload, 1);
      return state;
    case FlowerActions.REMOVE_FLOWERS:
      state.splice(0, state.length);
      return state;
    default:
      return state;
  }
}