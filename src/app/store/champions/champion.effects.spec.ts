import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ChampionEffects } from './champion.effects';

describe('ChampionEffects', () => {
  let actions$: Observable<any>;
  let effects: ChampionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChampionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ChampionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
