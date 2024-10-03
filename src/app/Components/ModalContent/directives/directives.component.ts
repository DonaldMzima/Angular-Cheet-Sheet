import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  // Angular directives example code
  public angularDirectiveCode: string = `
<!-- Angular Structural Directives (*ngIf and *ngFor) -->
<div *ngIf="isVisible">This is visible!</div>

<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

<!-- Angular Attribute Directive (ngClass) -->
<div [ngClass]="{'highlight': isHighlighted}">Highlight me!</div>

export class ExampleComponent {
  isVisible = true;
  isHighlighted = false;
  items = ['Item 1', 'Item 2', 'Item 3'];
}
  `;

  // React equivalents example code
  public reactDirectiveCode: string = `
import React, { useState } from 'react';

function ExampleComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      {/* Conditional Rendering in React */}
      {isVisible && <div>This is visible!</div>}

      {/* Looping through items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Conditional className in React */}
      <div className={isHighlighted ? 'highlight' : ''}>Highlight me!</div>
    </div>
  );
}

export default ExampleComponent;
  `;

  constructor() {}

  ngOnInit() {}
}
