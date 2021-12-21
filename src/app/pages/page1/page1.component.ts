import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component 
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
           AfterViewInit, AfterViewChecked, OnDestroy {


  value: number = 0;
  name: string = "";
  items: string[] = [];
  timeInSeconds: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log("Constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes hook triggered",changes);
    
  }

  ngDoCheck(): void {
    console.log("ngDoCheck hook");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInitok");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentCheckedok");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInitok");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewCheckedok");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.timerSubscription.unsubscribe(); //Removing the subscription from the timer interval observable
 }

  ngOnInit(): void {
    console.log("ngOnInit");  
    this.timerSubscription= interval(1000).subscribe(i => {
      this.timeInSeconds = i;
    });
  }

  sumToValue(){
    this.value++;
    this.items.push(`randomName${Math.floor(Math.random() * 10)}`);
    console.log(this.items);
  }


}
