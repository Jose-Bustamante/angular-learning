import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { first, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { FlowerService } from '../../service/flower.service';
import * as actions from './flower.actions';

@Injectable()
export class FlowerEffects {
  constructor(
    private actions$: Actions,
    private flowerService: FlowerService
  ) {}

  @Effect()
  loadFlowers$ = this.actions$.pipe(
    ofType<actions.LoadFlowers>(actions.FlowerActionTypes.LoadFlowers),
    switchMap(() => this.flowerService.getFlowersJSON()),
    map(flowers => new actions.AddFlowerSuccess({flowers}))
  );
}
