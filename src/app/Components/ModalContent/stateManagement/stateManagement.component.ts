import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stateManagement',
  standalone: true,
  templateUrl: './stateManagement.component.html',
  styleUrls: ['./stateManagement.component.css'],
})
export class StateManagementComponent implements OnInit {
  // Angular state management code example
  public angularStateManagement: string = `
 // Angular: State Management using BehaviorSubject (RxJS)
 import { Injectable } from '@angular/core';
 import { BehaviorSubject } from 'rxjs';

 @Injectable({
   providedIn: 'root',
 })
 export class CounterService {
   private counter = new BehaviorSubject<number>(0);
   counter$ = this.counter.asObservable();

   increment() {
     this.counter.next(this.counter.value + 1);
   }

   decrement() {
     this.counter.next(this.counter.value - 1);
   }
 }

 // Angular Component that uses the service
 import { Component, OnInit } from '@angular/core';
 import { CounterService } from './counter.service';

 @Component({
   selector: 'app-counter',
   template: '<p>Counter: {{ count }}</p> <button (click)="increment()">Increment</button>',
 })
 export class CounterComponent implements OnInit {
   count: number;

   constructor(private counterService: CounterService) {}

   ngOnInit() {
     this.counterService.counter$.subscribe((value) => this.count = value);
   }

   increment() {
     this.counterService.increment();
   }
 }
 `;

  // React state management code example
  public reactStateManagement: string = `
 // React: State Management using useState
 import React, { useState } from 'react';

 function CounterComponent() {
   const [count, setCount] = useState(0);

   const increment = () => {
     setCount(count + 1);
   };

   return (
     <div>
       <p>Counter: {count}</p>
       <button onClick={increment}>Increment</button>
     </div>
   );
 }

 export default CounterComponent;
 `;

  constructor() {}

  ngOnInit() {}
}
