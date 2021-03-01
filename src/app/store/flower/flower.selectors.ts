import { createSelector } from '@ngrx/store';
import { flowersAdapter, FlowersState }  from './flower.reducer';
import { getPlantsState } from './flower-store';

export const getFlowerState = createSelector(
  getPlantsState,
  state => state.flowers
);

export const getFlowersLoading = createSelector(
  getFlowerState,
  state => state.loading
);

export const getFlowersError = createSelector(
  getFlowerState,
  state => state.error
);

export const {
  selectEntities: getFlowersEntities,
  selectAll: getFlowers,
  selectTotal: getNumberOfFlowers
} = flowersAdapter.getSelectors(getFlowerState);


