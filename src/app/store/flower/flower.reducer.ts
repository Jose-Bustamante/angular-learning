import { Flower } from '../../model/flower';

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
      return state;
      // return state.splice(action.payload, 1);
    // case FlowerActions.REMOVE_FLOWERS:
    //   return state.splice(0, state.length);
    default:
      return state;
  }
}