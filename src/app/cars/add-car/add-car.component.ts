import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {
  constructor() {}

  @Output() addCar = new EventEmitter();

  ngOnInit(): void {}

  statusOptions: SelectOption[] = [
    { value: 'AVAILABLE', label: 'available' },
    { value: 'RENTED', label: 'rented' },
    { value: 'REPAIRING', label: 'repairing' },
  ];

  addCarForm = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    name: new FormControl('', Validators.required),
    mileage: new FormControl(0, Validators.required),
    status: new FormControl(undefined, Validators.required),
  });

  onSubmit() {
    console.log(this.addCarForm.value);
    this.addCar.emit(this.addCarForm.value);
  }
}
