import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataBinding',
  standalone: true,
  templateUrl: './dataBinding.component.html',
  styleUrls: ['./dataBinding.component.css'],
})
export class DataBindingComponent implements OnInit {
  // Angular data binding example code
  public angularDataBindingCode: string = `
<!-- Angular Two-Way Data Binding -->
<input [(ngModel)]="name" placeholder="Enter your name" />
<p>Hello, {{ name }}!</p>

export class ExampleComponent {
  name = '';
}
  `;

  // React data binding example code
  public reactDataBindingCode: string = `
import React, { useState } from 'react';

function ExampleComponent() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default ExampleComponent;
  `;

  constructor() {}

  ngOnInit() {}
}
