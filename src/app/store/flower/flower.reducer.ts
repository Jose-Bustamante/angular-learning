import { Flower } from '../../model/flower';
import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';


import * as FlowerActions from './flower.actions';


export const flowersAdapter = createEntityAdapter<Flower>({
  selectId: flowers => flowers.name
});

export interface FlowersState extends EntityState<Flower> {
  loading: boolean;
  error: undefined;
}

export const initialState: FlowersState = flowersAdapter.getInitialState({
  loading: false,
  error: undefined
});


export function flowerReducer(
  state= initialState,
  action: Action
) {
  const specificAction = action as FlowerActions.FlowerActions;

  switch (specificAction.type) {
    case FlowerActions.LOAD_FLOWER:
      return state;

    case FlowerActions.ADD_FLOWER: {
      const payload = specificAction.payload;
      return { ...flowersAdapter.addOne(payload, state) };
    }

    case FlowerActions.REMOVE_FLOWER: {
      const payload = specificAction.payload;
      return { ...flowersAdapter.removeOne(payload.name, state) };
    }

    case FlowerActions.REMOVE_FLOWERS:
      return { ...flowersAdapter.removeAll(state)};

    default:
      return state;
  }
}