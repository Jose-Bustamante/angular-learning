import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Flower } from 'src/app/model/flower';
import { ChuckService } from 'src/app/service/chuck.service';
import { getFlowers, getNumberOfFlowers } from 'src/app/store/flower/flower.selectors';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnInit {

  fieldValue: string = 'This is a test';
  public data:any;
  flowers$!: Observable<Flower[]>;
  flowersTotal$!: Observable<number>;

  constructor(private chuckService: ChuckService, private store:Store<{}>) {

  }

  ngOnInit(): void {
    setInterval(
      () => this.fieldValue = Math.random().toString(),
      4000,
    );
    this.chuckService.getData().subscribe(
      data => {this.data = data},
      err => console.log('API Error ==> ', err),
      () => console.log('API Load done!')
    )
    this.flowersTotal$ = this.store.pipe(select(getNumberOfFlowers));
  }

  clickHandler() {
    console.log('It has been clicked!')
  }

  keyHandler(event: KeyboardEvent) {
    console.log('Key pressed!', event)
    console.log('Input value!', event.key)
  }

  myFlowerHandler() {
    this.flowers$ = this.store.pipe(select(getFlowers))
  }
}
