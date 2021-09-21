import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core'

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('on init')
  }
  ngOnChanges() {
    console.log('on changes')
  }
  ngDoCheck() {
    console.log('do check')
  }

  ngAfterContentInit() {
    console.log('after content init')
  }
  ngAfterContentChecked() {
    console.log('after content checkced')
  }
  ngAfterViewInit() {
    console.log('after view init')
  }

  ngAfterViewChecked() {
    console.log('after view checked')
  }

  ngOnDestroy() {
    console.log('on destroy')
  }
}
