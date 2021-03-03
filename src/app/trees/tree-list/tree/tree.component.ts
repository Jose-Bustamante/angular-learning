import { Component, Input, OnInit } from '@angular/core';
import { Flower } from 'src/app/model/flower';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() flowers: Flower[] = [];
  @Input() flowersAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
