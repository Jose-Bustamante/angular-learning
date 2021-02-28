import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Flower } from 'src/app/model/flower';
import { LoadFlower } from 'src/app/store/flower/flower.actions';
import { getGeneralFlowerState } from 'src/app/store/flower/flower.selectors';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.scss']
})
export class FlowerListComponent implements OnInit {
  // flowerString: string[] = ['Rosa','Margarita', 'Tulipan'];
  flowers: Flower[] = [
    {name: 'Rosa', color: 'red'},
    {name: 'Tulipan', color: 'Blue'},
    {name: 'Girasol', color: 'Yellow'},
    {name: 'Margarita', color: 'White'},
  ]
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadFlower());
    this.store.select(getGeneralFlowerState).subscribe(state => console.log(state));
  }

}
