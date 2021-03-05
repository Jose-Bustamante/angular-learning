import { Flower } from '../../model/flower';
import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';


import {FlowerActions, FlowerActionTypes} from './flower.actions';


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
  const specificAction = action as FlowerActions;

  switch (specificAction.type) {
    case FlowerActionTypes.LoadFlower:
      return state;

    case FlowerActionTypes.LoadFlowers:
      return { ...state, loading: true};

    case FlowerActionTypes.AddFlower: {
      const payload = specificAction.payload;
      return { ...flowersAdapter.addOne(payload, state) };
    }

    case FlowerActionTypes.AddFlowerSuccess: {
      const payload = specificAction.payload;
      return { ...flowersAdapter.addMany(payload.flowers, state), loading:false };
    }

    case FlowerActionTypes.RemoveFlower: {
      const payload = specificAction.payload;
      return { ...flowersAdapter.removeOne(payload.name, state) };
    }

    case FlowerActionTypes.RemoveFlowers:
      return { ...flowersAdapter.removeAll(state)};

    default:
      return state;
  }
}