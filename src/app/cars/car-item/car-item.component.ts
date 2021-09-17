import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {  ICar } from '../car.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() carItem!: ICar;
  @Output() removeCar = new EventEmitter<string>();

  removeItem(car: ICar) {
    this.removeCar.emit(car.id);
  }
}
