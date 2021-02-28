import { Component, OnInit } from '@angular/core';
import { ChuckService } from 'src/app/service/chuck.service';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnInit {

  fieldValue: string = 'This is a test';
  public data:any;

  constructor(private chuckService: ChuckService) {

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
  }

  clickHandler() {
    console.log('It has been clicked!')
  }

  keyHandler(event: KeyboardEvent) {
    console.log('Key pressed!', event)
    console.log('Input value!', event.key)
  }

}
