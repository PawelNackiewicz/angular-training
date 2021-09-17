import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent {
  constructor(private apiService: ApiService) {}

  city: string | undefined;
  temp: number | undefined;
  country: string | undefined;
  fetched = false;

  fetchData() {
    this.apiService.getData().subscribe(
      (res) => {
      this.city = res.location.name;
      this.country = res.location.country;
      this.temp = res.current.temp_c;
      this.fetched = true;
    });
  }
}
