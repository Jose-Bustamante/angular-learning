import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Flower } from 'src/app/model/flower';
import * as FlowerActions from 'src/app/store/flower/flower.actions';
import { getGeneralFlowerState } from 'src/app/store/flower/flower.selectors';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.scss']
})
export class FlowerListComponent implements OnInit {
  // flowerString: string[] = ['Rosa','Margarita', 'Tulipan'];
  flowers: Flower[] = [];
  constructor(private store: Store<{}>) { }

  addFlower(name:string, color:string) {
    this.store.dispatch(new FlowerActions.AddFlower({name, color}));
  }

  removeFlower(index:number) {
    this.store.dispatch(new FlowerActions.RemoveFlower(index));
  }

  removeFlowers() {
    this.store.dispatch(new FlowerActions.RemoveFlowers());
  }

  ngOnInit(): void {
    this.store.dispatch(new FlowerActions.LoadFlower());
    this.store.select(getGeneralFlowerState).subscribe(state => this.flowers = state);
  }

}
