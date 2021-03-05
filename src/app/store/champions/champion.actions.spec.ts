import * as fromChampion from './champion.actions';

describe('loadChampions', () => {
  it('should return an action', () => {
    expect(fromChampion.loadChampions().type).toBe('[Champion] Load Champions');
  });
});
