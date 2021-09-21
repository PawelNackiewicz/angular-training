import { Component } from '@angular/core'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  constructor() {
    this.today = new Date()
  }

  name = 'Paweł'
  today: Date | undefined = undefined
  tasks = ['drink coffee', 'see Angular docs']
}
