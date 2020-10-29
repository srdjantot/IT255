import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'met-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges fired: ${changes}`);
  }
  ngOnInit(): void {
    console.log('ngOnInit fired');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck fired');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit fired');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked fired');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit fired');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked fired');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy fired');
  }
  title = 'IT255-DZ13';
}
