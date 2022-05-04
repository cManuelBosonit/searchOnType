import { Component, Input, OnInit } from '@angular/core';
import { City } from '../interface/city';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list!: City[];

  constructor() { }

  ngOnInit(): void {
  }

}
