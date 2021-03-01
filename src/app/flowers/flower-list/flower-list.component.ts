import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Flower } from 'src/app/model/flower';
import * as FlowerActions from 'src/app/store/flower/flower.actions';
import { Observable } from "rxjs";
import { getFlowers } from 'src/app/store/flower/flower.selectors';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.scss']
})
export class FlowerListComponent implements OnInit {
  flowers: Flower[] = [];
  flowers$!: Observable<Flower[]>;
  @ViewChild('flowerName') flowerName!: ElementRef;
  @ViewChild('flowerColor') flowerColor!: ElementRef;

  constructor(private store: Store<{}>) { }

  addFlower(name:string, color:string) {
    this.store.dispatch(new FlowerActions.AddFlower({name, color}));
    this.flowerColor.nativeElement.value = '';
    this.flowerName.nativeElement.value = '';
  }

  removeFlower(name:string, color:string) {
    this.store.dispatch(new FlowerActions.RemoveFlower({name, color}));
  }

  removeFlowers() {
    this.store.dispatch(new FlowerActions.RemoveFlowers());
  }

  ngOnInit(): void {
    this.store.dispatch(new FlowerActions.LoadFlower());
    // this.store.select(getFlowers).subscribe(state => this.flowers = state);
    this.flowers$ = this.store.pipe(select(getFlowers))
  }

}
